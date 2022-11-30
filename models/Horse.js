'use strict';
const mongoose = require('mongoose');
const { Schema } = mongoose;

const horseSchema = new Schema ({
  "name": {type: String, required: true},
  "nft_id": {type: Number, required: true},
  "img_url": {type: String, required: true},
	"gen": {type: String, required: true},
	"bloodline": {type: String, required: true},
	"breed_type": {type: String, required: true},
	"color": {type: String, required: true},
	"horse_type": {type: String, required: true},
	"race_statistic": {
		"first_place_finishes": {type: Number, required: true},
		"second_place_finishes": {type: Number, required: true},
		"third_place_finishes": {type: Number, required: true},
		"number_of_races": {type: Number, required: true},
  	"win_rate": {type: Number, required: true}
	}
});

const Horse = mongoose.model('Horse', horseSchema);

module.exports = Horse;
