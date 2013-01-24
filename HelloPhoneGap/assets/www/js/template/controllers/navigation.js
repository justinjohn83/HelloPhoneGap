var navigationController = {
		// Must give full paths
			views:{
					"homePanel_tpl":"js/template/views/homePanel.tpl",
					"cameraPanel_tpl":"js/template/views/cameraPanel.tpl",
					"mapPanel_tpl":"js/template/views/mapPanel.tpl",
					"questionsPanel_tpl":"js/template/views/questions.tpl",
					"questionsPanelFinish_tpl":"js/template/views/questionsFinish.tpl",
					
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
		    
		    submitQuestions: function() {
		    	var self = navigationController;
		    	/*
		    	if(self.questionsModel) {
		    		var qtn = self.questionsModel[self.questionsModel.length - 1];
		    		self.saveQuestion(qtn);
		    	}
		    	*/
		    	$("#questionsContent").html($.template('questionsPanelFinish_tpl'));
		    
		    },
		    
		    // FIXME: this does not belong here - move this and actual logic in "questions" to a business logic class
		    saveQuestion: function(index) {
		    
		    	var self = navigationController;		    	
		    	var question = app.createQuestionModel(self.questionsModel[index]);
		    	
		    	
		    	
		    	// TODO: read the question data, update model, and save
		    	question.save(function(savedQuestion) {
		    		// TODO:
		    	});
		    	
		    	return true;
		    },
		    
		    questionsModel:null,
		    
		    questions:function(index) {
		    	
		    	var self = navigationController;
		    	
		    	var resultCallback = function(results){
		    		// if no questions exist then create some defaults
		    		if(!results || results.length == 0) {
		    			results = app.loadDefaultQuestions();
		    		}
		    		self.questionsModel = results;
		    		
		    		if(typeof index === 'undefined') {
		    			index = 0;
		    		}
		    		else {
		    			index = parseInt(index);
		    		}	
		    		var currentQuestion = results[index];
		    		
		    		var linkValue;
		    		var linkText;
		    		var isRoute;
		    		
		    		if(index < results.length - 1) {
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
		    		
						
						
		    	}; // resultsCallback
		    	
		    	if(!self.questionsModel) {
		    		// remote call
		    		new QuestionModel().getAll(resultCallback);
		    	}
		    	else {
		    		// call based on cached data
		    		resultCallback(self.questionsModel);
		    	}
		    	
		    
		    },
		    // default action to home : route "navigation/"
		    "default":function(){
		        //Let's load the "hello.js" view as th default.
		        navigationController.home();
		    },
	 }; // home controller

		$.mvc.controller.create("navigation",navigationController);    