
'use strict';

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var index			 = require('../app/routes/server.routes.index');
var complaints = require('../app/routes/server.routes.complaintLetter');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(err, req, res, next) {
	console.log(res);

  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  next();
})

// Define raw app routes here, link them to routers in /routes
app.use('/', index);
app.use('/complaint-letter', complaints);

var port = process.env.PORT || 5000;        // set our port

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);