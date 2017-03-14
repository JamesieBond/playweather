// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const db = require('./db')
// Get our API routes
const api = require('./server/routes/pagerequests');
const weatherapi = require('./server/routes/weatherapi');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

//Connect to the DB for City data
db.connect('mongodb://localhost:27017/cityDB', function(err) {
  if (err) {
    console.log(err);
    console.log('Unable to connect to Mongo.')
    process.exit(1)
  } else {
    app.listen(3001, function() {
      console.log('Listening on port 3001...')
    })
  }
})

// Set our api routes
app.use('/api', api);
app.use('/weatherapi', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
