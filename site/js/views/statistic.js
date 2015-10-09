var app = app || {};

app.StatisticView = Backbone.View.extend({
	el: '#books',

	initialize: function(initialData){
		this.collection = new app.Statistic(initialData);
		this.render();
	},

	render: function() {
		this.collection.each(function(item){
			this.renderInflation(item);
		}, this);
	},

	renderInflation: function(item) {
		var inflationView = new app.InflationView({
			model: item
		});
		this.$el.append(bookView.render().el);
	}
});