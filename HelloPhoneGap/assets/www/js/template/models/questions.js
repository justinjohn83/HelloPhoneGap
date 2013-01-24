
/*
app.questions = [
	
	app.question(app.questionType.Text,{name:'Favorite Teacher'}),
	app.question(app.questionType.Combo,{name:'Favorite Color',value:['Blue','Green','Red','Purple','Orange']}),
	app.question(app.questionType.Check,{name:'Favorite foods',value:['Pizza','Burgers','Salad']}),
	app.question(app.questionType.Radio,{name:'Morning Person?',value:['Yes','No']})
	app.question(app.questionType.TextArea,{name:'Comments'}),



];
*/

var QuestionModel = $.mvc.model.extend("question",{questionType:null,choices:{}});


var app = app || {};

// if no questions exist then create some defaults
app.loadDefaultQuestions = function() {
		var questions = [];
		
		var q = new QuestionModel();
		q.questionType = app.questionType.Text;
		q.choices = {name:'Favorite Teacher'};
		questions.push(q);
		
		q = new QuestionModel();
		q.questionType = app.questionType.Combo;
		q.choices = {name:'Favorite Color',value:['Blue','Green','Red','Purple','Orange']};
		questions.push(q);
		
		questions.push(new QuestionModel(
			{
				questionType:app.questionType.Check,
				choices:{name:'Favorite foods',value:['Pizza','Burgers','Salad']}
		
			})
		
		);
		
		questions.push(new QuestionModel(
		
			{
				questionType:app.questionType.Radio,
				choices:{name:'Morning Person?',value:['Yes','No']}
			
			
			})
		);
		
		questions.push(new QuestionModel(
		
			{
				questionType:app.questionType.TextArea,
				choices:{name:'Comments'}
			
			
			})
		);
		
		return questions;
};

