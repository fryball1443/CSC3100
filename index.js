const express = require( 'express');
const cors = require('cors');
const HTTP_PORT = 8000;
console. log("Listening on port " + HTTP_PORT);
var app = express();
app. use(cors());
app.get ("/", (req, res, next) => {
  console. log("Routed to ")
  res. status (200). send ('{"Outcome": "Success"}');
})

app. listen (HTTP_PORT);

