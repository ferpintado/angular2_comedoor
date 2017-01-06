var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	address : { type: String, required: true, },
	timestamp : { type: Date, default: Date.now },
	place: [ { type: Schema.Types.ObjectId, required: true, ref: 'Place' }],
	user : { type: Schema.Types.ObjectId, required: true, ref: 'User' },
	order: [ Schema.Types.Mixed  ],
	delivered: { type: Boolean, default: false }
});

module.exports = mongoose.model('Order', schema);