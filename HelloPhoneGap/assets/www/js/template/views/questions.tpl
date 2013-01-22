<%
/*
app.questions = [
	
	app.question(app.questionType.Text,{name:'Favorite Teacher'}),
	app.question(app.questionType.Combo,{name:'Favorite Color',value:['Blue','Green','Red','Purple','Orange']}),
	app.question(app.questionType.Check,{name:'Favorite foods',value:['Pizza','Burgers','Salad']}),
	app.question(app.questionType.Radio,{name:'Morning Person?',value:['Yes','No']})
	app.question(app.questionType.TextArea,{name:'Comments'}),



];
*/
%>

<br/>
<br/>
<%=question.choices.name %> : <input id="questionValue" name="questionValue" type="text"/>

