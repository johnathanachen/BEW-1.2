const express = require('express');
const router = express.Router();
const app = express();
const jwt = require("jsonwebtoken");
const subdomain = require('express-subdomain');
const cookieParser = require("cookie-parser");
const theaterController = require('./controllers/theater.js');
const sessionController = require('./controllers/session.js');
const reservationController = require('./controllers/reservation.js');


// ROUTES
app.use(subdomain('api', router));
app.use('/theater', theaterController);
app.use('/session', sessionController);
app.use('/theater/:id/session/:id', reservationController);





// Server
app.listen(3000, () => {
  console.log('App listening on port 3000!')
})
