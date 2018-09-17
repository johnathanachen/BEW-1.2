const express = require('express');
const Session = require('../models/session.js');
const Theater = require('../models/theater.js');
var router = express.Router();
const db = require('../server.js');

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


// Create a new session - api.domain.com/sessions
router.post('/', function (req, res) {
	const session = new Session(req.body);
	session.save((err, question) => {
      if (err) return next(err);
      res.status(201);
      res.send(session);
    });
});

// Reserve seats in a session
router.put('/:id/cart/:cart_id', (req, res) => {
  Session.findOneAndUpdate({_id: req.params.id }, req.body)
    .exec(function(err, result) {

        var setSeatsSelection = {};
        for(var i = 0; i < seats.length; i++) {
          var seatSelector = {};
          var seatSelection = 'seats.' + seats[i][0] + '.' + seats[i][1];
          // Part of $and query to check if seat is free
          seatSelector[seatSelection] = 0;
          seatsQuery.push(seatSelector);
          // Part of $set operation to set seat as occupied
          setSeatsSelection[seatSelection] = 1;
        }
        var result = sessions.update({
              _id: sessionId
            , $and: seatsQuery
          }, {
              $set: setSeatsSelection
            , $inc: { seatsAvailable: -seats.length }
            , $push: {
              reservations: {
                  _id: cartId
                , seats: seats
                , price: session.price
                , total: session.price * seats.length
              }
            }
          });

      if(err) return res.status(500).json({err: err.message})
      res.json({result, message: 'Successfully updated'})
    });
});

var sessionId = 1;
var cartId = 1;

var seats = [[1, 5], [1, 6]];






module.exports = router;
