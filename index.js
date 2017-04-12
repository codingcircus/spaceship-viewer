'use strict';

const
  express      = require('express'),
  path = require('path');

let app = express();

app.use(express.static('public'));
app.use('/node_modules', express.static('node_modules'));
app.use('/app', express.static('app'));

// api calls
app.use(require('./api/spaceships'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
})

// Start Server
let server = app.listen(8081, '0.0.0.0', () => {
  console.log(`API listening on http://${server.address().address}:${server.address().port}`);
});