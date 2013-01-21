/*
Question types: 
1) Text
2) Combo Box
3) Check Box
4) Radio button (3 or fewer exclusive choices)

*/

// top level namespace
var app = app || {};

app.questionType = {
	Text:1,
	Combo:2,
	Check:3,
	Radio:4


};

app.question = function(questionType,choices) {
	
	var that = {};
	
	that.questionType = questionType;
	// name:value pairs
	that.choices = choices;
	
	return that;

};

app.questions = [
	
	app.question(app.questionType.Text,{name:'Favorite Teacher'}),
	app.question(app.questionType.Combo,{name:'Favorite Color',value:['Blue','Green','Red','Purple','Orange']}),
	app.question(app.questionType.Check,{name:'Favorite foods',value:['Pizza','Burgers','Salad']}),
	app.question(app.questionType.Radio,{name:'Morning Person?',value:['Yes','No']})



];



