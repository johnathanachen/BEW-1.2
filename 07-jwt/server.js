var createError = require('http-errors');
var jwt = require('jsonwebtoken');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var authController = require('./controllers/auth.js');
var user = require('./models/user');

var app = express();

mongoose.connect('mongodb://localhost:27017/BEW', { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
   console.log("Connected successfully to server");
});

var token = jwt.sign({ _id: user._id }, 'shhhhhhared-secret');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
var jwt = require('express-jwt');
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
}).unless({path: ['/', '/login', '/sign-up', '/bananas']}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', authController);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
