const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const Mixed = Schema.Types.Mixed;

const SessionSchema = new Schema({
	_id: {type: ObjectId},
    theaterId: {type: Number},
	name: {type: String},
    description: {type: String},
    start: {type: Date, default: Date.now},
    end: {type: Date, default: Date.now},
    price: {type: Number},
    seatsAvailable: {type: Number, required: true},
	seats: {type: Mixed, default: []},
    reservations: { type : Array, default: [{
        _id: {type: ObjectId},
        seats: {type: Mixed, default: []},
        price: {type: Number},
        total: {type: Number}
    }]}
});

module.exports = mongoose.model('Session', SessionSchema);
