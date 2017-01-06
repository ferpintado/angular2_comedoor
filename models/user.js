var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
	firstName : { type: String, required: true },
	lastName : { type: String, required: true },
	password : { type: String, required: true },
	email : { type: String, required: true, unique: true },
	orders: [ { type: Schema.Types.ObjectId, ref: 'Order' }]
});

schema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

schema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', schema); 