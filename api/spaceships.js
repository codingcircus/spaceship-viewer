const express = require('express');
const mongoose = require('mongoose');
const spaceships = require('../data/spaceships.json');

const router = express.Router();
mongoose.Promise = global.Promise;

router.get('/v1/spaceships', function(req, res) {
  res.json(spaceships);
});

router.get('/v1/spaceships/:id', (req, res) => {
  const spaceship = spaceships.find(spaceship => spaceship.id === parseInt(req.params.id, 10));
  res.json(spaceship);
});

module.exports = router;