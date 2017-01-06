var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	name : { type: String, required: true },
	address : { type: String},
	schedule : { type: String},
	geo_location: {
		lat: { type: Number },
		long: { type: Number }
	},
	menu : [ Schema.Types.Mixed ],
	stats: { type: Schema.Types.Mixed }	
});

module.exports = mongoose.model('Place', schema);