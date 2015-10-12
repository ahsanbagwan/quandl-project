// Module dependencies

var application_root = __dirname,
	express = require('express'),
	bodyParser = require('body-parser'),
	path = require('path'),
	mongoose = require('mongoose');

// Create server
var app = express();
mongoose.connect('mongodb://localhost/inflation_database');

// Schema
var Inflation = new mongoose.Schema({
	date: Date,
	value: String
});

// Models
var InflationModel = mongoose.model('Inflation', Inflation);

var Book = new mongoose.model('Inflation');

*/

// Where to serve static content
app.use(express.static(path.join(application_root,'site')));
app.use(bodyParser());

app.get('api', function(request, response){
	response.send('Inflation API is running');
});

// Get a list of inflation values
/*app.get('api/statistics', function(request, response){
	return InflationModel.find( function( err, data){
		if (!err) {
			return response.send(data);
		} else {
			return console.log(err);	
		}
	});		
});
*/

// Start server
var port = 4711;

app.listen(port, function(){
	console.log('Express server listening on port %d in %s mode', port, app.settings.env);
});	