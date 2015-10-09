var app = app || {};

app.InflationView = Backbone.View.extend({
	tagname: 'div',
	className: 'inflationContainer',
	template:  $( '#inflationTemplate' ).html(), 

	render: function(){
		var tmpl = _.template(this.template);
		this.$el.html(tmpl(this.model.toJSON()));
		return this;
	}		
});