const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Mixed = Schema.Types.Mixed;
const ObjectId = Schema.Types.ObjectId;

const ReservationSchema = new Schema({
    _id: {type: ObjectId},
    seats: {type: Mixed, default: []},
    price: {type: Number},
    total: {type: Number}
});

module.exports = mongoose.model('Reservation', ReservationSchema);
