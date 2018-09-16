const express = require('express');
var router = express.Router();
const Theater = require('../models/theater.js');
const db = require('../server.js');

// All theater
router.get('/', (req, res) => {
	Theater.find({}, function(err, docs) {
	    if (!err){
	        res.status(200).send(docs);
			res.json({docs})
	    } else {throw err;}
	});
});

router.post('/', function (req, res) {
	const theater = new Theater(req.body);
	theater.save((err, question) => {
      if (err) return next(err);
      res.status(201);
      res.send(theater);
    });
});

// A specific theater
router.get('/:id', function (req, res) {
  res.send(req.theater);
});

router.param('id', (req, res, next, id) => {
  Theater.findById(id, (err, doc) => {
    if (err) return next(err);
    if (!doc) {
      err = new Error('Document not found');
      err.status = 404;
      return next(err);
    }
	req.theater = doc;
    return next();
  });
});

// Edit theater
router.put('/:id', (req, res) => {
  Theater.findOneAndUpdate({_id: req.params.id }, req.body)
    .exec(function(err, result) {
      if(err) return res.status(500).json({err: err.message})
      res.json({result, message: 'Successfully updated'})
    });
});

module.exports = router;
