'use strict';
const mongoose = require('mongoose');
const { Schema } = mongoose;

const horseSchema = new Schema ({
  "nft_id": {type: Number, required: true},
});

const Horse = mongoose.model('Horse', horseSchema);

module.exports = Horse;
