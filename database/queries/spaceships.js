const mongoose = require('mongoose');
const Spaceship = require('../models/spaceship');
const ObjectId = require('mongoose').Types.ObjectId

mongoose.connect('mongodb://localhost/spaceship-viewer');
mongoose.connection
  .on('error', (error) => {
    console.warn('Warning', error);
  });

module.exports.getAll = function() {
  return Spaceship.find();
}

module.exports.get = function(id) {
  return Spaceship.findOne({ _id: new ObjectId(id) });
}

module.exports.save = function(val) {
  const spaceship = new Spaceship(val);
  return spaceship.save();
}

module.exports.delete = function(id) {
  return Spaceship.findByIdAndRemove(new ObjectId(id));
}