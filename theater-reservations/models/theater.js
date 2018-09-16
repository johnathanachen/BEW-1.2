const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Mixed = Schema.Types.Mixed;

const TheaterSchema = new Schema({
	_id: {type: Number},
	name: {type: String},
	seats: {type: Mixed, default: []},
	seatsAvailable: {type: Number}
});

module.exports = mongoose.model('Theater', TheaterSchema, 'theaters');
