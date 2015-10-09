var app = app || {};

app.Statistic = Backbone.View.extend({
	el: '#books',

	initialize: function(initialData){
		this.collection = new app.Statistic();
		this.render();
	},

	render: function() {
		this.collection.each(function(item){
			this.renderInflation(item);
		}, this);
	},

	renderInflation: function(item) {
		var statisticView = new app.InflationView({
			model: item
		});
		this.$el.append(statisticView.render().el);
	}
});