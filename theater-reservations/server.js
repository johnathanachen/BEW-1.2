const express = require('express');
const router = express.Router();
const app = express();
const bodyParser = require('body-parser');
const jwt = require("jsonwebtoken");
const subdomain = require('express-subdomain');
const cookieParser = require("cookie-parser");
const theaterController = require('./controllers/theater.js');
const sessionController = require('./controllers/session.js');
const reservationController = require('./controllers/reservation.js');
const cartController = require('./controllers/cart.js');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

const pretty = require('express-prettify');


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/TheaterReservation', { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
   console.log("Connected successfully to server");
});

app.use(pretty({ query: 'pretty' }));
app.use(bodyParser.json());

// ROUTES
app.use(subdomain('api', router));
app.use('/theaters', theaterController);
app.use('/sessions', sessionController);
app.use('/reservations', reservationController);
app.use('/carts', cartController);


// Server
app.listen(3000, () => {
  console.log('App listening on port 3000!')
})

module.exports = db;
