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
<% if(question.questionType === app.questionType.Text) { %>

	<%=question.choices.name %> : <input id="questionValue" name="questionValue" type="text"/>
	
<% } %>

<% else if(question.questionType === app.questionType.Combo) { %>
	<%=question.choices.name %><br/>
	<select name="questionValue" id="questionValue">
		<% for(var i = 0; i < question.choices.value.length; ++i) { %>
			<option value="<%=question.choices.value[i]%>"><%=question.choices.value[i]%></option>
		<% } %>
	</select>
%> } %>

