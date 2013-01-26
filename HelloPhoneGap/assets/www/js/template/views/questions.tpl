<br/>
<form id="currentQuestion">
<fieldset>
<% if(question.questionType === app.questionType.Text) { %>
	<h4><%=question.choices.name %></h4><br/>
	<input name="questionValue" type="text" class="jq-ui-forms"/>
	
<% } %>

<% if (question.questionType === app.questionType.Combo) { %>
	<h4><%=question.choices.name %></h4>
	<br/>
	<span>
	<select name="questionValue" class="jq-ui-forms">
		<% for(var i = 0; i < question.choices.value.length; ++i) { %>
			<option value="<%=question.choices.value[i]%>"><%=question.choices.value[i]%></option>
		<% } %>
	</select>
	</span>
	<br/>
<% } %>

<% if(question.questionType === app.questionType.Check) { %>
	<h4><%=question.choices.name %></h4><br/>
		<% for(var i = 0; i < question.choices.value.length; ++i) { %>
			<p>
				<input type="checkbox" class="jq-ui-forms" value="<%=question.choices.value[i]%>"/>
				<label for="<%=question.choices.value[i]%>"><%=question.choices.value[i]%></label>
			</p>
		<% } %>	
<% } %>

<% if(question.questionType === app.questionType.Radio) { %>
	<h4><%=question.choices.name %></h4><br/>
		<% for(var i = 0; i < question.choices.value.length; ++i) { %>
			<p>
				<input type="radio" name="questionValue" class="jq-ui-forms" value="<%=question.choices.value[i]%>"/>
				<label for="<%=question.choices.value[i]%>"><%=question.choices.value[i]%></label>
			</p>
		<% } %>	
<% } %>

<% if(question.questionType === app.questionType.TextArea) { %>

	<h4><%=question.choices.name %></h4><br/>
	<textarea name="questionValue" class="jq-ui-forms"></textarea>
	
<% } %>
<br/>
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
</fieldset>
</form>
