const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
// Set up the express app
const app = express();

//post to listen to
app.set('port', 8000);


// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Serve the static files from the React app
app.use('/resource', express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'build')));


app.get(/.*/, (req, res) => {
  return "Hello"
});
module.exports = app;
