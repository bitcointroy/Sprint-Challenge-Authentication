const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
	// there should be a user object set on req
	// use that req.user object to create a user and save it to our Mongo instance.
	const user = new User(req.user);
	console.log(req.user);
	user
		.save()
		.then(newUser => {
			res.status(200).json(newUser);
		})
		.catch(err => {
			console.log(err);
		});
};

module.exports = {
	createUser
};
