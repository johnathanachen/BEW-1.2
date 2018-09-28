const express = require('express');
const User = require('../models/user.js');
var jwt = require('jsonwebtoken');
var router = express.Router();

router.get('/sign-up', function (req, res) {
  res.json({'stub': `[${req.originalUrl}] Endpoint works!`});
});

router.get('/login', function (req, res) {
  res.json({'stub': `[${req.originalUrl}] Endpoint works!`});
});

router.post('/sign-up', function (req, res) {
  var user = new User(req.body);
  user.save(function (err) {
  if (err) return handleError(err);
    var token = jwt.sign({ _id: user._id }, 'shhhhhhared-secret');
    res.json({'saved!': `[${req.originalUrl}] Endpoint works!`});
  });

});
