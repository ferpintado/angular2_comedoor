var express = require('express');
var router = express.Router();

var Place = require('../models/place');

router.get('/', function (req, res, next) {
	Place.find()
		.exec(function (err, places){
			if (err) {
				return res.status(500).json({
					title: "An error ocurred",
					error: err
				});
			}
			res.status(200).json(places);
			
		});
});


router.get('/:id', function (req, res, next) {
	Place.findById(req.params.id)
		.exec(function (err, place){
			if (err) {
				return res.status(500).json({
					title: "An error ocurred",
					error: err
				});
			}
			res.status(200).json(place);
			
		});
});

router.post('/', function (req, res, next){
	console.log(req.body);
	var place = new Place({
		name: req.body.name,
		address: req.body.address,
		schedule: req.body.schedule,
		geo_location: req.body.geo_location,
		stats: null
	});
	place.save( function (err, result) {
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
