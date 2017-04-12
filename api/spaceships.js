const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const spaceships = require('../data/spaceships.json');
const queries = require('../database/queries/spaceships');

const router = express.Router();
mongoose.Promise = global.Promise;

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/v1/spaceships', function(req, res) {
  queries.getAll()
    .then((spaceships) => {
      res.json(spaceships);
    });
});

router.get('/v1/spaceships/:id', (req, res) => {
  queries.get(req.params.id)
    .then((spaceship) => {
      res.json(spaceship);
    });
});

router.post('/v1/spaceships', (req, res) => {
  queries.save(req.body)
    .then(() => {
      res.json({
        msg: 'success'
      });
    });
});

router.delete('/v1/spaceships/:id', (req, res) => {
  queries.delete(req.params.id)
    .then(() => {
      res.json({
        msg: 'success'
      });
    })
})

module.exports = router;