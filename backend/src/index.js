const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: 'dev.env' });
const createServer = require('./createServer');
const db = require('./db');
const cors = require('cors')

const server = createServer();

//Use express middleware to handle cookies (JWT)
server.express.use(cookieParser());

// decode the jwt so we can get the userid on each request
server.express.use((req, res, next) => {
    const { token } = req.cookies;
    if (token) {
        const { userId } = jwt.verify(token, process.env.APP_SECRET);
        //put the userId onto the request for further requests to access
        req.userId = userId;
    }

    next();
})

// create middleware that populates user on each request 
server.express.use(async (req, res, next) => {
    if (!req.userId) {
        return next();
    }
    const user = await db.query.user({ where: { id: req.userId } }, '{id, permissions, email, name}');
    req.user = user;
    next();
})

server.start({
    cors: {
        credentials: true,
        origin: /:3000$/
    }
}, deets => {
    console.log(`Server is now running on http://localhost:${deets.port}`)
})