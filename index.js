'use strict';

const
  express      = require('express'),
  sassMiddleware = require('node-sass-middleware'),
  path = require('path'),
  spaceships       = require('./data/spaceships.json');

let app = express();

app.use(express.static('public'));

// Setup sass
app.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public'),
}))

// api calls
app.get('/v1/spaceships', (req, res) => {
  res.json(spaceships);
});

app.get('/v1/spaceships/:id', (req, res) => {
  const spaceship = spaceships.find(spaceship => spaceship.id === parseInt(req.params.id, 10));
  res.json(spaceship);
});

// Start Server
let server = app.listen(8081, '0.0.0.0', () => {
  console.log(`API listening on http://${server.address().address}:${server.address().port}`);
});