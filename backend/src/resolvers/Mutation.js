const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { randomBytes } = require('crypto');
const { throwIfNotLoggedIn, isUserOrHasPermission } = require('../utils');

const Mutations = {
    async signup(parent, args, ctx, info) {
        args.email = args.email.toLowerCase();
        //hash their pass
        const password = await bcrypt.hash(args.password, 10);
        // create the user in the db
        const user = await ctx.db.mutation.createUser({
            data: {
                ...args,
                password,
                permissions: { set: ['USER'] }
            }
        }, info);
        // create the jwt
        const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
        // we set the jwt as a cookie on the response
        ctx.response.cookie('token', token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 365 // 1 year cookie
        });
        // finally we return the user to the browser
        return user;
    },
    async signin(parent, { email, password }, ctx, info) {
        // check if there is a user with that email
        const user = await ctx.db.query.user({ where: { email } });
        if (!user) {
            throw new Error(`No such user found for email ${email}`);
        }
        // check if their password is correct
        const valid = await bcrypt.compare(password, user.password);
        if (!valid) {
            throw new Error('Invalid password');
        }
        // generate the jwt
        const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
        // set the cookie with the token
        ctx.response.cookie('token', token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 365 // 1 year cookie
        });
        // return the user
        return user;
    },
    signout(parent, args, ctx, info) {
        ctx.response.clearCookie('token');
        return { message: 'Goodbye!' };
    },
    async createExercise(parent, args, ctx, info) {
        const item = await ctx.db.mutation.createExercise({
            data: {
                name_lower: args.name.toLowerCase(),
                muscleGroup_lower: args.muscleGroup && args.muscleGroup.toLowerCase(),
                ...args
            }
        }, info);

        return item;
    },
    async createSession(parent, args, ctx, info){
        // throwIfNotLoggedIn(ctx);
        // isUserOrHasPermission(ctx, args.userId, ['ADMIN']);

        const session = await ctx.db.mutation.createSession({
            data: {
                exercises: [],
                user: {
                    connect: {
                        id: args.userId
                    }
                },
                completed: false,
                name: args.name,
                note: args.note
            }
        }, info);

        return session;
    },
    async addSessionExercise(parent, args, ctx, info){
        // throwIfNotLoggedIn(ctx);

        const session = await ctx.db.query.session({where:{id: args.sessionId}}, `{user {id}}`);
        if(!session){
            throw new Error("Cannot locate that session");
        }
        // isUserOrHasPermission(ctx, session.user.id, ['ADMIN']);
        const exercise = await ctx.db.query.exercise({where:{id: args.exerciseId}}, `{id}`);
        if(!exercise){
            throw new Error("Cannot locate that exercise");
        }

        const sessionExercise = await ctx.db.mutation.createSessionExercise({
            data: {
                sets: [],
                session: {
                    connect: {id: args.sessionId}
                },
                exercise: {
                    connect: {
                        id: args.exerciseId
                    }
                }
            }
        }, info);

        console.log(sessionExercise);
        return sessionExercise;
    },
    async addSessionExerciseSet(parent, args, ctx, info){
        // throwIfNotLoggedIn(ctx);
        const sessionExercise = await ctx.db.query.sessionExercise({where:{
            id: args.sessionExerciseId
        }}, `{id session {id user {id}}}`);
        if(sessionExercise === null){
            throw new Error("Cannot locate that session exercise");
        }

        const setData = {...args};
        delete setData.sessionExerciseId;

        // isUserOrHasPermission(ctx, sessionExercise.session.user.id, ['ADMIN']);
        const set = await ctx.db.mutation.createSessionExerciseSet({
            data: {
                sessionExercise: {
                    connect: {
                        id: args.sessionExerciseId
                    },
                },
                ...setData
            }
        }, info);

        return set;
    }
};

module.exports = Mutations;