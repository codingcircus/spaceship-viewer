const mongoose = require('mongoose');

function connect() {
  mongoose.connect('mongodb://localhost/spaceship-viewer');
  mongoose.connection
    .once('open', () => {
      console.log('Connection successfull');
    })
    .on('error', (error) => {
      console.warn('Warning', error);
    });
}