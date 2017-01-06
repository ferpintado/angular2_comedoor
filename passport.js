var LocalStrategy = require('passport-local').Strategy;
var User = require('./models/user.js');

module.exports = function(passport) {

	passport.serializeUser( function(user, done) {
		done( null, user.id );
	});

	passport.deserialzierUser( function(id, done ) {
		User.findById(id, function( err, user){
			done(err, user);
		});
	});

	passport.use('local-login', new LocalStrategy({ 
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	},
	function( req, email , password, done){
		if (email)
			email = email.toLowerCase();

		process.nextTick( function() {
			User.findOne({'email': email}, function(err, user){
				if (err)
					return done(err);

				if (!user)
					return done(null, false, req.flash('loginMessage', 'No user found.'));

				if (!user.validPassword(password))
					return done(null, false, req.flash('loginMessage', 'Wrong password.'));

				else
					return done(null, user);

			});
		});
	}
	));

	passport.use('local-signup', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	},
	function (req, email, password, done){
		if (email)
			email = email.toLowerCase();

		process.nextTick( function() {
			if (!req.user) {
				User.findOne({'email': email}), function(err, user){
					if (err)
						return done(err);

					if (user){
						return done(null, false, req.flash('signupMessage',' This email is already taken'));
					} else {
						//create user
						var newUser = new User();

						newUser.email = email;
						newUser.password = newUser.generateHash(password);

						newUser.save( function(err){
							if (err)
								return done(err);

							return done(null, newUser);
						});
					}
				} else if (!req.user.email) {

					User.findOne({ 'email': email}, function( err, user){
						if (err)
							return done(err);

						if (user) {
							return done(null, false, req.flash('loginMessage', 'This email is already taken'));
						} else {
							var userReq = req.user;
							userReq.email = email;
							userReq.password = userReq.generateHash(password);
							userReq.save( function(err) {
								if (err)
									return done(err);

								return done(null, userReq);
							});
						}
					})
				} else {

					return done(null, req.user);
				}
			}
		});
	}
	));
};

