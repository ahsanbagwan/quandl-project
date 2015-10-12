var app = app || {};

app.Statistic = Backbone.Collection.extend({
	model: app.Inflation,
	url: '/api/statistics'
});