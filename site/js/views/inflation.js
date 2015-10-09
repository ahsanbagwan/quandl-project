var app = app || {};

app.InflationView = Backbone.View.extend({
	tagname: 'div'
	template: _.template( $( '#inflationTemplate' ).html() ),

	render: function(){
		this.$el.html(this.template(this.model.attributes));
		return this;
	}		
});