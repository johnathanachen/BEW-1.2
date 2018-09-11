const express = require('express');
var router = express.Router();


// All theater
router.get('/', (req, res) => {
	res.json({'Theater': `[${req.originalUrl}] Endpoint works!`});
});

// A specific theater
router.get('/:id', function (req, res) {
  res.json({'stub': `[${req.originalUrl}] Endpoint works!`});
});

// Insert a new session to theater
router.post('/:id', function (req, res) {
  res.json({'stub': `[${req.originalUrl}] Endpoint works!`});
});

module.exports = router;
