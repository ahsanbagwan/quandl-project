var app = app || {};

app.StatisticView = Backbone.View.extend({
	el: '#books',

	initialize: function() {
		console.log("in list view initialize");
		this.collection = new app.Statistic();
		this.collection.fetch();
		console.log("collection " + this.collection);
		this.render();
	},

	render: function() {
		console.log("in render");
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