var app = app || {};

app.InflationView = Backbone.View.extend({
	tagname: 'div',
	className: 'inflationContainer',
	template:  $('#inflationTemplate').html(), 

	render: function(){
		console.log("in element view");
		var tmpl = _.template(this.template);
		this.$el.html(tmpl(this.model.toJSON()));
		return this;
	}		
});