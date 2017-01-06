var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');

var User = require('../models/user');


router.post('/',function(req,res) {
	console.log(req.body);
    var user = new User({
    	firstName : req.body.firstName,
    	lastName : req.body.lastName,
    	password : bcrypt.hashSync(req.body.password, 10),
    	email : req.body.email,
    	orders: []
    });

    user.save( function (err, result) {
		if (err){
			return res.status(500).json({
				title: 'An error ocurred',
				error: err
			});
		}

		res.status(201).json(result);
	});
});

module.exports = router;