var express = require('express');
var router = express.Router();

// Example stub:
router.get('/theater/name-of-route', function (req, res) {
  res.json({'stub': `[${req.originalUrl}] Endpoint works! Replace me in Step 2.`});
});

module.exports = router;
