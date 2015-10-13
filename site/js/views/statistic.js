var app = app || {};

app.StatisticView = Backbone.View.extend({
	el: '#books',

	initialize: function() {
		console.log("in list view initialize");
		this.collection = new app.Statistic();
		this.collection.fetch();
		this.render();
	},

	render: function() {
		this.collection.each(function(item){
			console.log("item: " + item );
			this.renderInflation(item);
		}, this);
	},

	renderInflation: function(item) {
		var inflationView = new app.InflationView({
			model: item
		});
		this.$el.append(inflationView.render().el);
	}
});