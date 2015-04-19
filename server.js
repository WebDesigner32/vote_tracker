'use strict'

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/secret', function(req, res) {
  res.status(200).send('<h2>You\'ve stumbled across a secret. Tell no one.');
});

app.get('/*', function (req, res) {
  res.sendStatus(404);
});

app.listen(process.env.PORT || 5000, function() {
  console.log('It is running');
});

//My first server.js file!

