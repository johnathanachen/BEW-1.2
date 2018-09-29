const express = require('express');
const User = require('../models/user.js');
var jwt = require('jsonwebtoken');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sign-up', function (req, res) {
  res.render('signup.ejs');
});

router.get('/login', function (req, res) {
  res.render('login.ejs');
});

router.post('/sign-up', function (req, res) {
  var user = new User(req.body);
  user.save(function (err) {
  if (err) return handleError(err);
    var token = jwt.sign({ _id: user._id }, 'shhhhhhared-secret');
    res.json({'saved!': `[${req.originalUrl}] Endpoint works!`});
  });
});

router.get('/bananas', function(req, res) {
        res.send({"result": "I love bananas"});
    });

router.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

module.exports = router;
