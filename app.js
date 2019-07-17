const express = require('express');
const bodyParser = require('body-parser');
// Set up the express app
const app = express();

//post to listen to
app.set('port', 8000);


// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res) => {
  return res.send("Hello")
});

app.get('/google', (req, res) => {
  let apiData;
  //1. Fetch raw API DATA and display it
  //2. Create filter function to simplify data
  //   E.G. Only include related company and content
  //        Include only content and time published
  //        Only include information from 2019

  //API CALL
  //apiData = data from api call
  //simplifiedData = simplify(apiData)
  //return res.send(apiData)
  
  return res.send("")
});

module.exports = app;
