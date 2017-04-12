const mongoose = require('mongoose');
const { Schema } = mongoose;

const SpaceshipSchema = new Schema({
  name: String,
  slug: String,
  pilot: String,
  image: String,
  rating: Number
});

const Spaceship = mongoose.model('spaceship', SpaceshipSchema);
module.exports = Spaceship;