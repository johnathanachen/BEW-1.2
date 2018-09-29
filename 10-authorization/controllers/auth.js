const express = require('express');
const User = require('../models/user.js');
var router = express.Router();

var jwt = require('express-jwt');


// un protected
router.use(jwt({
    secret: 'shhhhhhared-secret',
    getToken: function fromHeaderOrCookie (req) { //fromHeaderOrQuerystring
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    } else if (req.cookies && req.cookies.token) {

        return req.cookies.token;
    }
    return null;
    }
}).unless({path: ['/', '/login', '/sign-up', '/token']}));

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/admin',
  jwt({secret: 'shhhhhhared-secret'}),
  function(req, res) {
    if (!req.user.admin) return res.sendStatus(401);
    res.send({"result": "Hello Admin"});
    res.sendStatus(200);
  });

router.get('/sign-up',
  jwt({secret: 'shhhhhhared-secret'}),
  function(req, res) {
    if (!req.user.admin) return res.sendStatus(401);
    res.send({"result": "Hello Admin"});
    res.sendStatus(200);
});


router.get('/login', function (req, res) {
  res.send({"result": "login"});
});

router.post('/sign-up', function (req, res) {
  var user = new User(req.body);
  user.save(function (err) {
  if (err) return handleError(err);
    var token = jwt.sign({ _id: user._id }, 'shhhhhhared-secret');
    res.json({'saved!': `[${req.originalUrl}] Endpoint works!`});
  });
});

router.get('/token', function(req, res) {
        res.send({"result": "I love bananas"});
    });

router.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

module.exports = router;
