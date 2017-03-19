'use strict';

const
  express      = require('express'),
  sassMiddleware = require('node-sass-middleware'),
  path = require('path'),
  spaceships       = require('./data/spaceships.json');

let app = express();

app.use(express.static('public'));
app.use('/node_modules', express.static('node_modules'));
app.use('/app', express.static('app'));

// api calls
app.get('/v1/spaceships', (req, res) => {
  res.json(spaceships);
});

app.get('/v1/spaceships/:id', (req, res) => {
  const spaceship = spaceships.find(spaceship => spaceship.id === parseInt(req.params.id, 10));
  res.json(spaceship);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
})

// Start Server
let server = app.listen(8081, '0.0.0.0', () => {
  console.log(`API listening on http://${server.address().address}:${server.address().port}`);
});