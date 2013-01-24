
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
	
	return q;
	

}
// if no questions exist then create some defaults
app.loadDefaultQuestions = function() {
		var questions = [];
		
		var q = new QuestionModel();
		q.questionType = app.questionType.Text;
		q.choices = {name:'Favorite Teacher'};
		q.value = [];
		questions.push(q);
		
		q = new QuestionModel();
		q.questionType = app.questionType.Combo;
		q.choices = {name:'Favorite Color',value:['Blue','Green','Red','Purple','Orange']};
		q.value = [];
		
		questions.push(q);
		
		
		q = new QuestionModel();
		q.questionType = app.questionType.Check;
		q.choices = {name:'Favorite foods',value:['Pizza','Burgers','Salad']};
		q.value = [];
		
		questions.push(q);
		
		
		q = new QuestionModel();
		q.questionType = app.questionType.Radio;
		q.choices = {name:'Morning Person?',value:['Yes','No']};
		q.value = [];
		
		questions.push(q);
		
		q = new QuestionModel();
		q.questionType = app.questionType.TextArea;
		q.choices = {name:'Comments'};
		q.value = [];
		
		questions.push(q);
		
		return questions;
};

