var App = App || {};

App.empView = Backbone.View.extend({
	el: 'body',
    model: '',
    events:{
      "change select": "updateView"
    },
	initialize: function(obj){
		_.bind(this.updateView, this);
       this.model = obj.model;
       this.tmpl = obj.compliedtmpl;
       this.render();
	},
	render: function(){
       var self = this;
       dust.render(self.tmpl, self.model,function(err,out){
	      if(!err)
	          self.$el.html = out;	             
       })      
	   return self;
	},
	updateView: function(e){       
       var detailViewObj = new App.detailView({model: _.find(this.model, { 'id': Number($("#employee").val())}), compliedtmpl: App.tmplMap[App.showDetail]})
	}
});

App.detailView = Backbone.View.extend({
    el: 'body',    
	initialize: function(obj){
       this.model = obj.model;
       this.tmpl = obj.compliedtmpl;
       this.render();
	},
	render: function(){
       var self = this;
       dust.render(self.tmpl, self.model,function(err,out){
	      if(!err)
	          $("#detailBase").html(out);	             
       })   
	}
});
