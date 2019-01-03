const { forwardTo } = require('prisma-binding');

const Query = {
    me(parent, args, ctx, info) {
        //check if there is a current user ID
        if (!ctx.request.userId) {
            return null;
        }
        return ctx.db.query.user({
            where: { id: ctx.request.userId }
        }, info);
    },
    async users(parent, args, ctx, info) {
        // 0. check if they are logged in
        // if (!ctx.request.userId) {
        //     throw new Error("You must be logged in to do that");
        // }
        // // 1. check if the user has permissions to query users
        // hasAtLeastOnePermission(ctx.request.user, ['ADMIN', 'PERMISSIONUPDATE']);

        // 2. if they do, query all users
        return ctx.db.query.users({}, info);
    }
};

module.exports = Query;