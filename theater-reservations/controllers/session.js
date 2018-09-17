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
router.put('/:id', (req, res) => {
    const session = new Session(req.body);
    var sessionId = req.params.id
    var seatsQuery = [];
    var setSeatsSelection = {};
    var cartId = JSON.stringify(req.body.cartId)
    var reqSeats = req.body.seats
    var seats = JSON.stringify(req.body.seats)
    var seatsArr = JSON.parse("[" + seats + "]");
    var seatsCount = Object.keys(seatsArr[0]).length

    Session.findById(sessionId, (err, session) => {
        price = session.price
        total = price * seatsCount
        for(var i = 0; i < seatsCount; i++) {
              var seatSelector = {};
              var seatSelection = 'seats.' + reqSeats[i][0] + '.' + reqSeats[i][1];
              // Part of $and query to check if seat is free
              seatSelector[seatSelection] = 0;
              seatsQuery.push(seatSelector);
              // Part of $set operation to set seat as occupied
              setSeatsSelection[seatSelection] = 1;
        }

        var condition = {
              _id: sessionId,
              $and: seatsQuery
          }

        var result = {
              $set: setSeatsSelection,
              $inc: { seatsAvailable: seatsCount },
              $push: {
              reservations: {
                  _id: cartId,
                  seats: seats,
                  price: price,
                  total: total
              }
            }
          }

        Session.findOneAndUpdate(condition, result, {new: true}, function(err, doc) {
            if(err){
                res.send("Something wrong when updating data!")

            } else {
                if (doc != null) {
                    res.send(doc)
                } else {
                    res.json({"result": "seats already taken"})
                }

            }

        });



    });






    //
    // if(result.nModified == 0) {
    //     console.console.log("Failed to reserve seats");
    // }
    //
    // if(result.nModified == 1) {
    //     console.console.log("Reservation was successful");
    // }
});








module.exports = router;
