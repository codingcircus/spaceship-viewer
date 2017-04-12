const mongoose = require('mongoose');
const Spaceship = require('../models/spaceship');

mongoose.connect('mongodb://localhost/spaceship-viewer');
mongoose.connection
  .on('error', (error) => {
    console.warn('Warning', error);
  });

module.exports.getAll = function() {
  return Spaceship.find();
}

module.exports.get = function(_id) {
  return Spaceship.findOne({ _id });
}

module.exports.save = function(val) {
  const spaceship = new Spaceship(val);
  return spaceship.save();
}