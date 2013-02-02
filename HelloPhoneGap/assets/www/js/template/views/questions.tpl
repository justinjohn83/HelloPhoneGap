<br/>
<form id="currentQuestion">
<fieldset>
<% if(question.questionType === app.questionType.Text) { %>
	<h4><%=question.choices.name %></h4><br/>
	<input name="questionValue" type="text" class="jq-ui-forms"><%=question.value[0]%></input>
	
<% } %>

<% if (question.questionType === app.questionType.Combo) { %>
	<h4><%=question.choices.name %></h4>
	<br/>
	<span>
	<select name="questionValue" class="jq-ui-forms">
		<% for(var i = 0; i < question.choices.value.length; ++i) {
			var val = question.choices.value[i];
		%>
		<%
			if(val === question.value[0]) {  %>
			    <option value="<%=val%>" selected><%=val%></option>
		<%	}
			else { 
		%>
				<option value="<%=val%>"><%=val%></option>
		<%
			}
		 } 
		 %>
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
				<% if(question.value.indexOf(val) !== -1) { %>
					<input name="questionValue" type="checkbox" checked class="jq-ui-forms" value="<%=val%>"/>
				<%
				}
				else {
				%>
					<input name="questionValue" type="checkbox" class="jq-ui-forms" value="<%=val%>"/>
				
				<%
				}
				%>
				
				<label for="<%=val%>"><%=val%></label>
			</p>
		<% } %>	
<% } %>

<% if(question.questionType === app.questionType.Radio) { %>
	<h4><%=question.choices.name %></h4><br/>
		<% for(var i = 0; i < question.choices.value.length; ++i) {
			var val = question.choices.value[i];
		 %>			<p>
		 
		 		<% if(question.value.indexOf(val) !== -1) { %>
					<input type="radio" name="questionValue" checked class="jq-ui-forms" value="<%=val%>"/>
				<%
				}
				else {
				%>
					<input type="radio" name="questionValue" checked class="jq-ui-forms" value="<%=val%>"/>
				
				<%
				}
				%>
				
				
				<label for="<%=val%>"><%=val%></label>
			</p>
		<% } %>	
<% } %>

<% if(question.questionType === app.questionType.TextArea) { %>

	<h4><%=question.choices.name %></h4><br/>
	<textarea name="questionValue" class="jq-ui-forms"><%=question.value[0]%></textarea>
	
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
