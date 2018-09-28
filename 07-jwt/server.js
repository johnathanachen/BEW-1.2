const express = require('express');
const router = express.Router();
const app = express();
const bodyParser = require('body-parser');
const jwt = require("jsonwebtoken");
const subdomain = require('express-subdomain');
const cookieParser = require("cookie-parser");
const authController = require('./controllers/auth.js');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/BEW1.2/07-jwt', { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
   console.log("Connected successfully to server");
});

app.use(cookieParser());
app.use(jwt({
    secret: 'shhhhhhared-secret',
    getToken: function fromHeaderOrCookie (req) { //fromHeaderOrQuerystring
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    } else if (req.cookies && req.cookies.token) {
        return req.cookies.token;
    }
    return null;
    }
}).unless({path: ['/', '/login', '/sign-up']}));

app.use('/sign-up', authController);



// Server
app.listen(3000, () => {
  console.log('App listening on port 3000!')
})

module.exports = db;
