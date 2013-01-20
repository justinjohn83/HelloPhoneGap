// global load and unloaded panel callbacks
//TODO: jqMobi doesn't seem to like namespaces and these need to be raw, global functions :(

function loadedPanel(what) {
	var id = what.id;
	console.log("Loaded panel: " + id);
	
	switch(id) {
		case 'cameraPanel': {
		
			myUi.camera.init();
			break;
		}
		case 'mapPanel': {
			myUi.map.init();
		
			break;
		}
		
		case 'homePanel' : {
			// TODO:
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
			// TODO:
			break;
		}
	
	}
}
/////// End Globals ///////////


///// Ui delgates ///////////////

var myUi = {

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
    }


};

