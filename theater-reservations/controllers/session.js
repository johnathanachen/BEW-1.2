const express = require('express');
var router = express.Router();

// All sessions (movie showings) of a theater
router.get('/', function (req, res) {
  res.json({'stub': `[${req.originalUrl}] Endpoint works!`});
});

// A specific showing session in a theater
router.get('/:id', function (req, res) {
  res.json({'stub': `[${req.originalUrl}] Endpoint works!`});
});


module.exports = router;
