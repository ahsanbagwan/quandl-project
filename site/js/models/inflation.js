var app = app || {};

app.Inflation = Backbone.Model.extend({
	defaults: { inflationDate: 'Unknown',
				value: 'Unknown'
	},
	idAttribute: '_id'			
});