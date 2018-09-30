const express = require('express');
const User = require('../models/user.js');
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var url = require('url');
var querystring = require('querystring');
var router = express.Router();

var expressJwt = require('express-jwt'); // protect routes

router.use(expressJwt({
    secret: 'shhhhhhared-secret',
    getToken: function fromHeaderOrCookie (req) { //fromHeaderOrQuerystring
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    } else if (req.cookies && req.cookies.token) {
        return req.cookies.token;
    }
    return null;
    }
}).unless({path: ['/', '/login', '/sign-up', '/token', '/setup', '/api', '/api/users', '/admin']}));

router.get('/login', function (req, res) {
    res.send({"result": "login"});
});

router.get('/sign-up', function(req, res) {
    res.send({"result": "signup"});
    res.sendStatus(200);
});

router.post('/token', function(req, res) {
  // find the user
  User.findOne({
   name: req.params.name || req.query.name
  }, function(err, user) {
   if (err) throw err;

   if (!user) {
     res.json({ success: false, message: 'Authentication failed. User not found.' });
   } else if (user) {

     // check if password matches
     if (user.password != (req.params.password || req.query.password) ) {
       res.json({ success: false, message: 'Authentication failed. Wrong password.' });
     } else {

       // if user is found and password is right
       // create a token with only our given payload
   // we don't want to pass in the entire user since that has the password
   const payload = {
     admin: user.admin
   };
       var token = jwt.sign(payload, 'shhhhhhared-secret', {
         expiresIn: 1440 // expires in 24 hours
       });

       // return the information including token as JSON
       res.json({
         success: true,
         message: 'Enjoy your token!',
         token: token
        });
      }
    }
  });
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

router.get('/setup', function(req, res) {

  // create a sample user
  var johnny = new User({
    name: 'johnny admin',
    password: 'password',
    admin: true
  });

  // save the sample user
  johnny.save(function(err) {
    if (err) throw err;

    console.log('User saved successfully');
    res.json({ success: true });
  });
});

router.get('/', function(req, res, next) {
  res.render('index');
});


router.post('/admin', function(req, res) {



});


// route middleware to verify a token
router.use(function(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, 'shhhhhhared-secret', function(err, decoded) {
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(403).send({
        success: false,
        message: 'No token provided.'
    });

  }
});

// router.get('/admin',
//   expressJwt({secret: 'shhhhhhared-secret'}),
//   function(req, res) {
//     if (!req.user.admin) return res.sendStatus(401);
//     res.send({"result": "Hello Admin"});
//     res.sendStatus(200);
//   });

  router.get('/api', function(req, res) {
    res.json({ message: 'Welcome to the coolest API on earth!' });
  });

  router.get('/api/users', function(req, res) {
    User.find({}, function(err, users) {
      res.json(users);
    });
  });



module.exports = router;
