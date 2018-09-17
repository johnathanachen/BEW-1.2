const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Mixed = Schema.Types.Mixed;

const CartSchema = new Schema({
	_id: {type: Number},
	state: {type: String},
	total: {type: Number},
    reservations: { type : Array, default: [{
        _id: {type: ObjectId()},
        seats: {type: Mixed, default: []},
        price: {type: Number},
        total: {type: Number}
    }],
    modifiedOn: {type: Date, default: Date.now},
    createdOn: {type: Date, default: Date.now},
});

module.exports = mongoose.model('Cart', CartSchema);
