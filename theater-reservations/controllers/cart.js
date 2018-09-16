const express = require('express');
var router = express.Router();

// All items in cart
router.get('/', function (req, res) {
  res.json({'stub': `[${req.originalUrl}] Endpoint works!`});
});

// Add reservation to cart
router.put('/:id', function (req, res) {
  res.redirect('/success');
});


module.exports = router;
