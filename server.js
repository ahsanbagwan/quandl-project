'use strict';
// Module dependencies

var application_root = __dirname,
	express = require('express'),
	bodyParser = require('body-parser'),
	path = require('path'),
	mongoose = require('mongoose');

// Create server
var app = express();

//Connect to database
mongoose.connect('mongodb://127.0.0.1/inflation_database');

// Schemas
var Inflation = new mongoose.Schema({
	inflationDate: String,
	value: String
});

// Models
var InflationModel = mongoose.model('Inflation', Inflation);

// Configure server
app.configure(function(){
	// parses request body and populates request.body
	app.use(express.bodyParser());

	// checks request.body for HTTP method overrides
	app.use(express.methodOverride());

	// perform route lookup based on url and HTTP method
	app.use(app.router);

	// Where to serve static content
	app.use(express.static(path.join(application_root, 'site')));

	// Show all errors in development
	app.use(express.errorHandler({dumpExceptions: true, showStack: true}));

});

// Test API endpoint
app.get('/api', function(request, response){
	response.send('Inflation API is running');
});

// Get a list of inflation values
app.get('/api/statistics', function(request, response){
	console.log("in api call on server");
	return InflationModel.find( function( err, data){
		if (!err) {
			console.log("data " + data);
			return response.send(data);
		} else {
			return console.log(err);	
		}
	});		
});

// Start server
var port = 4711;

app.listen(port, function(){
	console.log('Express server listening on port %d in %s mode', port, app.settings.env);
});	