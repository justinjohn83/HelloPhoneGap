var navigationController = {
		// Must give full paths
			views:{
					"homePanel_tpl":"js/template/views/homePanel.tpl",
					"cameraPanel_tpl":"js/template/views/cameraPanel.tpl",
					"mapPanel_tpl":"js/template/views/mapPanel.tpl",
					//"questionsPanel_tpl":"js/template/views/questions.tpl"
				  }
		
			   /* other code*/
			,
			
			init: function() {
			
				// initialization code
	       	
	       },
	       
	       home:function() {
	       		// action method called by route "navigation/home"
	       	    var content = $.template("homePanel_tpl");
	       		$("#homeContent").html(content);
	       		
	       		// helper view method
	       		homePage.showInfo();
	       		
	       
	       },
	       map:function(){
	       	    $("#mapContent").html($.template("mapPanel_tpl"));
	       
    			mapPage.showMap();

		    },
		    
		    camera:function(){
		         $("#cameraContent").html($.template("cameraPanel_tpl"));
		         cameraPage.takePicture();
		    },
		    // default action to home : route "navigation/"
		    "default":function(){
		        //Let's load the "hello.js" view as th default.
		        navigationController.home();
		    },
	 }; // home controller

		$.mvc.controller.create("navigation",navigationController);    