<br/>
<div id="currentQuestion">
<% if(question.questionType === app.questionType.Text) { %>

	<%=question.choices.name %> : <input name="questionValue" type="text"/>
	
<% } %>

<% if (question.questionType === app.questionType.Combo) { %>
	<%=question.choices.name %><br/>
	<select name="questionValue">
		<% for(var i = 0; i < question.choices.value.length; ++i) { %>
			<option value="<%=question.choices.value[i]%>"><%=question.choices.value[i]%></option>
		<% } %>
	</select>
<% } %>

<% if(question.questionType === app.questionType.Check) { %>
	<%=question.choices.name %><br/>
		<% for(var i = 0; i < question.choices.value.length; ++i) { %>
			<input type="checkbox" name="questionValue" value="<%=question.choices.value[i]%>"><%=question.choices.value[i]%><br>
		<% } %>	
<% } %>

<% if(question.questionType === app.questionType.Radio) { %>
	<%=question.choices.name %><br/>
		<% for(var i = 0; i < question.choices.value.length; ++i) { %>
			<input type="radio" name="questionValue" value="<%=question.choices.value[i]%>"><%=question.choices.value[i]%><br>
		<% } %>	
<% } %>

<% if(question.questionType === app.questionType.TextArea) { %>

	<%=question.choices.name %> <br/>
	<textarea name="questionValue" rows="10" cols="30"></textarea>
	
<% } %>
<br/>
<ul>
	<li>
		<% if(isRoute) {
				linkValue = "javascript:nextQuestion('" + currentIndex + "','" + linkValue + "')"; 
			}
		%>	
		<a href="<%=linkValue%>"><%=linkText%></a>	            
	</li>
</ul>

</div>
