

/**
	Template utility with caching to use with underscore.js templates
 */
(function($) {

	// jquery $.template and $.tmpl syntax - compatibile with jqMobi by default
	
    $["template"] = function(tmpl, data) {
        return (template(tmpl, data));
    };
    $["tmpl"] = function(tmpl, data) {
        return $(template(tmpl, data));
    };
    var template = function(id, data) {
        //If there's no data, let's pass an empty object so the user isn't forced to.
        if (!data)
            data = {};
        return applyTemplate(id, data);
    };
    
    (function() {
        var cache = {};
        
        this.getTemplate = function(id) {
	 
		    var templateItem = cache[id];
		    if (!templateItem){
		      templateItem = $('#' + id).html();
		 
		      // precompile the template, for underscore.js templates
		      templateItem = _.template(templateItem);
		 
		 	  //cache it
		      cache[id] = templateItem;
		    }
	 
	   	 	return templateItem;
        
        
        }; // getTemplate
        
        this.applyTemplate = function applyTemplate(id, data) {
        	var compiledTemplate = this.getTemplate(id);
        	
        	if(!compiledTemplate) {
        		console.log("Could not find template with id=" + id);
        		return "";
        	} 
        	
        	var result = compiledTemplate(data);
        	
        	return result;        
        };
    })();
})(jq);