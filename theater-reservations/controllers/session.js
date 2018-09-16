const express = require('express');
const Session = require('../models/session.js');
var router = express.Router();

// All sessions (movie showings) of a theater
router.get('/', function (req, res) {
    Session.find({}, function(err, docs) {
	    if (!err){
	        res.status(200).send(docs);
			res.json({docs})
	    } else {throw err;}
	});
});

router.param('id', (req, res, next, id) => {
  Session.findById(id, (err, doc) => {
    if (err) return next(err);
    if (!doc) {
      err = new Error('Document not found');
      err.status = 404;
      return next(err);
    }
	req.session = doc;
    return next();
  });
});

// A specific showing session in a theater
router.get('/:id', function (req, res) {
  res.send(req.session);
});


module.exports = router;
