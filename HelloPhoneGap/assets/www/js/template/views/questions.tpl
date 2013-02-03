<br/>
<form id="currentQuestion">
<fieldset>
<% if(question.questionType === app.questionType.Text) { %>
	<h4><%=question.choices.name %></h4><br/>
	<input name="questionValue" type="text" class="jq-ui-forms" data-bind="value: question.value[0]"/>
	
<% } %>

<% if (question.questionType === app.questionType.Combo) { %>
	<h4><%=question.choices.name %></h4>
	<br/>
	<span>
	<select name="questionValue" class="jq-ui-forms"
	        data-bind="options: question.choices.value,value: question.value[0]">
	</select>

	</span>
	<br/>
<% } %>

<% if(question.questionType === app.questionType.Check) { %>
	<h4><%=question.choices.name %></h4><br/>
		<% for(var i = 0; i < question.choices.value.length; ++i) {
			var val = question.choices.value[i];
		 %>
			<p>
					<input name="questionValue" type="checkbox" class="jq-ui-forms" value="<%=val%>"
					       data-bind="checked: question.value"/>
				
				<label for="<%=val%>"><%=val%></label>
			</p>
		<% } %>	
<% } %>

<% if(question.questionType === app.questionType.Radio) { %>
	<h4><%=question.choices.name %></h4><br/>
		<% for(var i = 0; i < question.choices.value.length; ++i) {
			var val = question.choices.value[i];
		 %>			<p>
		 
					<input type="radio" name="questionValue" checked class="jq-ui-forms" value="<%=val%>"
						data-bind="checked: question.value"/>
				
				<label for="<%=val%>"><%=val%></label>
			</p>
		<% } %>	
<% } %>

<% if(question.questionType === app.questionType.TextArea) { %>

	<h4><%=question.choices.name %></h4><br/>
	<textarea name="questionValue" class="jq-ui-forms" data-bind="value: question.value[0]"></textarea>
	
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
