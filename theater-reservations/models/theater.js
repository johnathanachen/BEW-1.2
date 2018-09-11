const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SessionSchema = new Schema({
	_id: {type: Object},
	theaterId: {type: Int},
	name: {type: String, required: true},
	description: {type: String, required: true},
	start: {type: String, required: true},
    end
    price
    seatsAvailable
    seats
    reservations
});



module.exports = mongoose.model('Post', PostSchema);
