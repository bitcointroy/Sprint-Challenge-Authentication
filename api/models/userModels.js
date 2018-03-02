const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
	username: {
		type: String,
		unique: true,
		required: true
	},
	password: String
});

module.exports = mongoose.model('User', UserSchema);
