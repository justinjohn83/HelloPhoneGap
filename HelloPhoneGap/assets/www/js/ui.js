// global load and unloaded panel callbacks
//TODO: jqMobi doesn't seem to like namespaces and these need to be raw, global functions :(

//This function will get executed when $.ui.launch has completed
$.ui.ready(function () {
   // FIXME: must fix the initialization order of the various libraries!
	app.pushQueue(function() {
		myUi.init();
	});
});


function loadedPanel(what) {
	var id = what.id;
	console.log("Loaded panel: " + id);
	
	switch(id) {
		case 'cameraPanel': {
		    // TODO: will need to reinitialize the templates!
		    $("#cameraContent").html($.template("cameraPanel_tpl"));
			myUi.camera.init();
			break;
		}
		case 'mapPanel': {
			// TODO: will need to reinitialize the templates!
	       	$("#mapContent").html($.template("mapPanel_tpl"));
			myUi.map.init();
		
			break;
		}
		
		case 'homePanel' : {
		
			// TODO: will need to reinitialize the templates!
			// homePanel loaded before we can init the app (so there is some dependency order init that is still needed)
			// so far now we will defer the initiation of the home content until we can load the template
		
			myUi.home.init();
			break;
		}
	
	}
}

function unloadedPanel(what) {

	var id = what.id;
	console.log("unloaded "+ id);
	
	switch(id) {
		case 'cameraPanel': {
		
			myUi.camera.dispose();
			break;
		}
		case 'mapPanel': {
			myUi.map.dispose();
		
			break;
		}
		
		case 'homePanel' : {
			myUi.home.dispose();
			break;
		}
	
	}
}
/////// End Globals ///////////


///// Ui delgates ///////////////

var myUi = {

	init: function() {
	
		// mvc config
		var app = new $.mvc.app();
 		app.setBaseDir("js/template");
		app.controllersDir("controllers"); //Set the directory to your controllers folder if it is not named "controllers".
		app.modelsDir("models"); //Set the directory to your models folder if it is not named "models";
		//app.viewsDir("js/template/views");
		
		//app.ready(function); //Function that executes as soon as the jqMVC app has completed loading, or right away if it 
		                     // has already loaded.
		                     
		// Must give full paths
		$.mvc.controller.create("foo",
			{views:{
					"homePanel_tpl":"js/template/views/homePanel.tpl",
					"cameraPanel_tpl":"js/template/views/cameraPanel.tpl",
					"mapPanel_tpl":"js/template/views/mapPanel.tpl"
				  }
		
			   /* other code*/
			,
			
			init: function() {
	       		//$("#cameraContent").html($.template("cameraPanel_tpl"));
	       		//$("#mapContent").html($.template("mapPanel_tpl"));
	       		var content = $.template("homePanel_tpl");
	       		$("#homeContent").html(content);
	       		myUi.home.init();
	       	
	       },
	       /*
	       "default":function(){
	       	    var content = $.template("homePanel_tpl");
	       		$("#homeContent").html(content);
	       }
	       */
        });                     
		console.log('UI init');
	
	
	},
	
    camera : {
    	
    	init: function() {
    		cameraPage.takePicture();
    	
    	},
    	
    	dispose : function() {
    		// TODO;
    	
    	}  
    }, 
    
    map : {
            	
    	init : function() {
    		mapPage.showMap();
    	
    	},
    	
    	dispose : function() {
    	
    	
    	}
    },
    
    home: {
    	init: function() {
    		homePage.showInfo();
    	},
    	
    	dispose : function() {
    	
    	
    	}
    }


};

