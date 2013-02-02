
/*
app.questions = [
	
	app.question(app.questionType.Text,{name:'Favorite Teacher'}),
	app.question(app.questionType.Combo,{name:'Favorite Color',value:['Blue','Green','Red','Purple','Orange']}),
	app.question(app.questionType.Check,{name:'Favorite foods',value:['Pizza','Burgers','Salad']}),
	app.question(app.questionType.Radio,{name:'Morning Person?',value:['Yes','No']})
	app.question(app.questionType.TextArea,{name:'Comments'}),



];
*/

var QuestionModel = $.mvc.model.extend("question",{questionType:null,choices:{},value:[]});


var app = app || {};

app.createQuestionModel = function(modelData) {
	var q = new QuestionModel();
	if(modelData.id !== 'undefined') {
		q.id = modelData.id;
	}
	q.value = modelData.value;
	q.questionType = modelData.questionType;
	q.choices = modelData.choices;
	q.questionId = modelData.questionId;
	
	return q;
	

};

// if no questions exist then create some defaults
// TODO: this will be a web service call through the service interface
// Returns a map of questions to their ids
var loadDefaultQuestions = function() {
		var questions = {};
		
		var id = 0;
		var q = new QuestionModel();
		q.questionType = app.questionType.Text;
		q.choices = {name:'Favorite Teacher'};
		q.value = [];
		q.questionId = id++;
		
		questions[q.questionId] = q;
		
		q = new QuestionModel();
		q.questionType = app.questionType.Combo;
		q.choices = {name:'Favorite Color',value:['Blue','Green','Red','Purple','Orange']};
		q.questionId = id++;
		
		q.value = [];
		
		questions[q.questionId] = q;
		
		
		q = new QuestionModel();
		q.questionType = app.questionType.Check;
		q.choices = {name:'Favorite foods',value:['Pizza','Burgers','Salad']};
		q.value = [];
		q.questionId = id++;
		
		questions[q.questionId] = q;
		
		
		q = new QuestionModel();
		q.questionType = app.questionType.Radio;
		q.choices = {name:'Morning Person?',value:['Yes','No']};
		q.value = [];
		q.questionId = id++;
		
		questions[q.questionId] = q;
		
		q = new QuestionModel();
		q.questionType = app.questionType.TextArea;
		q.choices = {name:'Comments'};
		q.value = [];
		q.questionId = id++;
		
		questions[q.questionId] = q;
		
		
		return questions;
};



/*
	persisted is a map of questionIds to questions
*/
app.loadQuestions = function(persistedList) {

	var mergedMap = {};

	var defaultQuestions = loadDefaultQuestions();
	
	if(persistedList && persistedList.length) {
		var persistedMap = this.createQuestionIdMap(persistedList);
	
	
		// persisted and defaultQuestions
		//  is just a map so it is safe to use for...in without Object.hasOwnProperty check
		for(var id in defaultQuestions) {
			// check to see if we have this id in persisted list
			// if not then augment the result set
			
			if(id !== 'length') {
				if(persistedMap.hasOwnProperty(id)) {
					mergedMap[id] = persistedMap[id];
				}
				else {
					mergedMap[id] = defaultQuestions[id];
					// TODO: delete the invalid persisted entry
				}
			}
		}
	
	}
	else {
		mergedMap = defaultQuestions;
	}
	
	
	return mergedMap;

};

app.createQuestionIdMap = function(resultList) {
	var map = {};
	
	if(resultList) {
		for(var i  = 0; i < resultList.length; ++i) {
			var result = resultList[i];
			if(result.questionId) {
				map[result.questionId] = result;
			}
		}
		
	}
	
	return map;

};

app.clone = function(question) {
	var serialized = JSON.stringify(question);
	var duplicated = JSON.parse(serialized);
	
	return duplicated;

};


