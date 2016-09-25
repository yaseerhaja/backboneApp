var App = App || {};

App.empModel = Backbone.Model.extend({
	initialize: function(obj){
		this.model = obj.data;
		this.compliedtmpl = obj.view;
	}
});

App.Router = Backbone.Router.extend({
    routes:{
    	"": "noaction",
    	"personal" : "showPersonalDetail",
    	"office" : "showOfficialDetail"
    },
    showPersonalDetail: function(){
    	$("#selectDetailtext").html("Personal Details of Employee <br><br>");
    	$("#detailBase").html("");	
        App.showDetail = "personalcompliedtmpl";
    },
    showOfficialDetail: function(){
    	$("#selectDetailtext").html("Official Details of Employee <br><br>");
    	$("#detailBase").html("");	
    	App.showDetail = "detailcompliedtmpl";
    }
});


(function(){
	var empContent = document.getElementById('employeetmpl').textContent,
	    compliedtmpl =  dust.loadSource(dust.compile(empContent)),
	    detailempContent = document.getElementById('details_company').textContent,
	    detailcompliedtmpl =  dust.loadSource(dust.compile(detailempContent)),
	    personalempContent = document.getElementById('details_personal').textContent,
	    personalcompliedtmpl =  dust.loadSource(dust.compile(personalempContent));

	    
        
        App.tmplMap = {
             'compliedtmpl' : compliedtmpl,
             'detailcompliedtmpl' : detailcompliedtmpl,
             'personalcompliedtmpl' : personalcompliedtmpl
        }

        var router = new App.Router();
        Backbone.history.start();
        $("#selectDetailtext").html("");


        var mod = new App.empModel({'data': empData.data,'view': compliedtmpl});
        var view = new App.empView(mod);
	    $('#employee').html(view.$el.html);
})();
