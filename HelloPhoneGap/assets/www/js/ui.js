// global load and unloaded panel callbacks
//TODO: jqMobi doesn't seem to like namespaces and these need to be raw, global functions :(

//This function will get executed when $.ui.launch has completed

var app = app || {};

$(document).ready(function() {

	app.mvc = new $.mvc.app();
	// app not respecting base dir - this is a bug!
	//app.mvc.setBaseDir("js/template/");
	app.mvc.controllersDir("js/template/controllers/"); //Set the directory to your controllers folder if it is not named "controllers".
	app.mvc.modelsDir("js/template/models/"); //Set the directory to your models folder if it is not named "models";
	
	app.mvc.loadModels(["questions"]);
	app.mvc.loadControllers(["navigation"]); //You can pass in array or a string.Ê You do not need to reference the .js extension.
});

// ensure that UI framework is loaded
$.ui.ready(function () {

	app.mvc.ready(function() {
		// ensure that phone gap is already initialized
		app.pushQueue(function() {
			// load the default route
			$.mvc.route("navigation/");
			
		});
	});
});


function loadedPanel(what) {
	var id = what.id;
	console.log("Loaded panel: " + id);
	
	switch(id) {
	
		// route through the correct controller to load the content for that panel
		case 'cameraPanel': {
			$.mvc.route("navigation/camera");
			break;
		}
		case 'mapPanel': {
			$.mvc.route("navigation/map");
			break;
		}
		
		case 'homePanel' : {
			$.mvc.route("navigation/home");
			break;
		}
		
		case 'questionsPanel': {
			$.mvc.route("navigation/questions");
			break;
		}
	
	}
}

function unloadedPanel(what) {

	var id = what.id;
	console.log("unloaded "+ id);
	
	// TODO: nothing to do here right now
	switch(id) {
		case 'cameraPanel': {
		
			break;
		}
		case 'mapPanel': {
		
			break;
		}
		
		case 'homePanel' : {
			break;
		}
		
		case 'questionsPanel' : {
			break;
		}
	
	}
}
/////// End Globals ///////////

