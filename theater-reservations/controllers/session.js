const express = require('express');
var router = express.Router();

// All sessions of a theater
router.get('/session', function (req, res) {
  res.json({'stub': `[${req.originalUrl}] Endpoint works!`});
});

// A specific session in a theater
router.get('/session/:id', function (req, res) {
  res.json({'stub': `[${req.originalUrl}] Endpoint works!`});
});


module.exports = router;
