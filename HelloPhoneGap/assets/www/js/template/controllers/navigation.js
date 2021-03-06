var navigationController = (function() {

		var that = {};
		
			var questionsModel = null;
			// FIXME: this will go into the storage adapter to detect if object has changed
			var origCurrentQuestion = null;
		// Must give full paths
			that.views = {
					"homePanel_tpl":"js/template/views/homePanel.tpl",
					"cameraPanel_tpl":"js/template/views/cameraPanel.tpl",
					"mapPanel_tpl":"js/template/views/mapPanel.tpl",
					"questionsPanel_tpl":"js/template/views/questions.tpl",
					"questionsPanelFinish_tpl":"js/template/views/questionsFinish.tpl",
					
				  };
		
			   /* other code*/
			
			that.init = function() {
			
				// initialization code
	       	
	       };
	       
	       that.home = function() {
	       		// action method called by route "navigation/home"
	       	    var content = $.template("homePanel_tpl");
	       		$("#homeContent").html(content);
	       		
	       		// helper view method
	       		homePage.showInfo();
	       		
	       
	       };
	       
	       that.map = function(){
	       	    $("#mapContent").html($.template("mapPanel_tpl"));
	       
	       		// map should already be triggered by geolocation update : nothing to do here
    			mapPage.showMap();

		    };
		    
		    that.camera = function(){
		         $("#cameraContent").html($.template("cameraPanel_tpl"));
		    };
		    
		    that.submitQuestions= function() {
		    	/*
		    	if(that.questionsModel) {
		    		var qtn = self.questionsModel[self.questionsModel.length - 1];
		    		self.saveQuestion(qtn);
		    	}
		    	*/
		    	$("#questionsContent").html($.template('questionsPanelFinish_tpl'));
		    
		    };
		    
		    // FIXME: this does not belong here - move this and actual logic in "questions" to a business logic class
		    that.saveQuestion= function(index) {
		    
		    	var question = app.createQuestionModel(questionsModel[index]);
		    	
		    	// value should already be updated by knockout
		    	
		    	/*
		    	var value;
		    	switch(question.questionType) {
		    		case app.questionType.Combo:
		    			// find the selected option
		    			value = $("[name='questionValue']").val();
		    		break;
		    		
		    		
		    		case app.questionType.Text:
		    		case app.questionType.TextArea:
		    			value = $("[name='questionValue']").val();
		    		break;
		    		
		    		case app.questionType.Radio:
		    		case app.questionType.Check:
		    				value = [];
		    				var results = $("[name='questionValue']");
		    				for(var i = 0; i < results.length; ++i) {
		    					var elm = results[i];
		    					if(elm.checked) {
		    						value.push(elm.value);
		    					}
		    				}
		    		break;
		    	
		    	}
		    	
		    	if(value) {
		    		question.value = value;
		    	}
		    	*/
		    	
		    	// TODO: DEBUG
		    		var message = "Completed Question: id=" + question.questionId + "value=";
			    		
		    		for(var i = 0; i < question.value.length; ++i) {
		    			message += question.value[i] + ",";
		    		}
			    		
			    	console.log(message);
			    	
			    	// TODO: END DEBUG
			    		
		    	// TODO: read the question data, update model, and save
		    	// FIXME: this will be determined by storage adapter in future
		    	if(!_.isEqual(origCurrentQuestion.value,question.value)) {
		    	
		    		console.log("Saving updates to question");
		    		
			    	question.save(function(savedQuestion) {
			    	
	
			    		var message = "questionSaved: id=" + savedQuestion.questionId + "value=";
			    		
			    		for(var i = 0; i < savedQuestion.value.length; ++i) {
			    			message += savedQuestion.value[i] + ",";
			    		}
			    		
			    		console.log(message);
			    		
			    	});
			    }
		    	
		    	return true;
		    };
		    
		    var doPlatformFixes = function(question) {
		    
		       if(typeof(device) !== "undefined") {
		    
			    	// Android select bug on Android < 4.0
			    	if(question.questionType === app.questionType.Combo
			    		 && device.platform === 'Android'
			    		 && parseFloat(device.version) < 4) {
			    		// convert to radio buttons
			    		question.questionType = app.questionType.Radio;
			    	
			    	}
		    	}
		    
		    };
		    var renderQuestionView = function(index) {
		    
		    		if(typeof index === 'undefined') {
		    			index = 0;
		    		}
		    		else {
		    			index = parseInt(index);
		    		}	
		    		var currentQuestion = questionsModel[index];
		    		
		    		doPlatformFixes(currentQuestion);
		    		
		    		// note copy of previous current question
		    		// Deep copy
					//var newObject = jQuery.extend(true, {}, oldObject);
					origCurrentQuestion = app.clone(currentQuestion);
		    		
		    		var linkValue;
		    		var linkText;
		    		var isRoute;
		    		
		    		var modelSize = _.size(questionsModel);
		    		
		    		if(index < modelSize - 1) {
		    			linkValue = 'navigation/questions/' + (index + 1);
		    			linkText = 'Next';
		    			isRoute = true;
		    		}
		    		else {
		    			linkValue = 'navigation/submitQuestions/';
		    			linkText = 'Finish';
		    			isRoute = true;
		    		}
		    		
		    		var model = {
		    						question:currentQuestion,
		    					 	linkValue:linkValue,
		    					 	linkText:linkText,
		    					 	isRoute: isRoute,
		    					 	currentIndex: index,
		    					 };
		    		// save previous question
		    					 
		    		// set the view
		    		$("#questionsContent").html($.template('questionsPanel_tpl',model));
		    		
		    		// integrate with knockout
		    		// TODO: don't seem to need ko.observable or ko.observableArray right now
		    		// this is because this is for if we want the view to auto-update based on model changes, but
		    		// view is driven by controller and underscore template renderings right now
		    		function MyQuestionsView () {
		    			this.question = currentQuestion;
		    		
		    		};
		    		
		    		var myView = new MyQuestionsView();
		    		
		    		ko.applyBindings(myView);
		    		
		    
		    };
		    

		    
		    that.questions = function(index) {
		    	
		    	var self = that;
		    	
		   		// model persistence callback - data loaded
		   		// need to place this nested to capture the "index" parameter
		   		 var resultCallback = function(results) {
		    	
			    	// need to load the default questions
			    	// TODO: This should be implemented as part of the storage adapter and be hidden
			    	// behind that interface
			    	// but for now we are using the default storage adapter
			    	//var resultsMap = app.createQuestionIdMap(results);
			    	
			    	var resultsMap = app.loadQuestions(results);
			    	
			    	questionsModel = resultsMap;
			    	
			    	// do the view
			    	renderQuestionView(index);
		    
		   		 };
		    	
		    	if(!questionsModel) {
		    		// remote call
		    		new QuestionModel().getAll(resultCallback);
		    	}
		    	else {
		    		// render the view
		    		renderQuestionView(index);
		    	}
		    	
		    
		    }; // questions route
		    
		   
		    
		    // default action to home : route "navigation/"
		    that["default"] = function(){
		        //Let's load the "hello.js" view as th default.
		        navigationController.home();
		    };
		    
		    return that;
	 })(); // navigation controller

		$.mvc.controller.create("navigation",navigationController);    