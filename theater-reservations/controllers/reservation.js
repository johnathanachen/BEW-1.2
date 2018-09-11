const express = require('express');
var router = express.Router();

// All reservations of a session from a theater
router.get('/reservations', function (req, res) {
  res.json({'stub': `[${req.originalUrl}] Endpoint works!`});
});

// // A specific reservations of a session from a theater
// router.get('theater/theater:id/session/session:id/reservations/reservations:id', function (req, res) {
//   res.json({'stub': `[${req.originalUrl}] Endpoint works!`});
// });
//
// // View avaiable seats from a session
// router.get('theater/theater:id/session/session:id/seats', function (req, res) {
//   res.json({'stub': `[${req.originalUrl}] Endpoint works!`});
// });
//
// // Reserve a seat and create a new cart
// router.post('theater/theater:id/session/session:id/reservations/seats/seat_id', function (req, res) {
//   res.json({'stub': `[${req.originalUrl}] Endpoint works!`});
// });
//
// // Add to current cart
// router.post('theater/theater:id/session/session:id/reservations/cart/cart:id/seats/seat_id', function (req, res) {
//   res.json({'stub': `[${req.originalUrl}] Endpoint works!`});
// });
//
// // View current session cart
// router.get('theater/theater:id/session/:id/reservations/reservations:id/cart/cart:id', function (req, res) {
//   res.json({'stub': `[${req.originalUrl}] Endpoint works!`});
// });
//
// // State of the cart, canceled, success, error
// router.post('theater/theater:id/session/session:id/reservations/reservations:id/cart/cart:id/state', function (req, res) {
//   res.json({'stub': `[${req.originalUrl}] Endpoint works!`});
// });
//
// // view selected seats
// router.get('theater/theater:id/session/session:id/reservations/reservations:id/cart/cart:id/reservations/seats', function (req, res) {
//   res.json({'stub': `[${req.originalUrl}] Endpoint works!`});
// });
//
// // remove seat
// router.delete('theater/theater:id/session/session:id/reservations/reservations:id/cart/cart:id/reservations/seats/seat:id', function (req, res) {
//   res.json({'stub': `[${req.originalUrl}] Endpoint works!`});
// });
//
//

module.exports = router;
