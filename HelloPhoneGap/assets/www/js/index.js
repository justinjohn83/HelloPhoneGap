/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
 
 
 $(document).ready(function() {
 
 	   app.initialize();
 	            
});
 
var app = app || {};

    // Application Constructor
    app.initialize = function() {
        this.bindEvents();
    };
    
    app.ready = false;
    
    app.updateGeoPosition = function(callback) {

          var options = {enableHighAccuracy: true,timeout:5000};
           navigator.geolocation.getCurrentPosition(
           		function(position) {
           		
           			app.geoCoords = position.coords;
           			// update the map
           			//mapPage.showMap();
           		},
           		
           		function(error) {
           			console.log('ERROR (' + error.code + '): ' + error.message);
           		
           		},
           		
           		options);		

	};
	
	app.executeQueue = function() {
		
		for(var i = 0; i < this.queue.length; ++i) {
			this.queue[i]();
		}
		
		this.queue.length = 0;
	};
	
	app.pushQueue = function(func) {
	
		if(!this.ready) {
			this.queue.push(func);
		}
		else {
			func();
		}
	};
	
	app.queue = [];
    
    app.geoCoords= null;		
    
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    app.bindEvents= function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        
    };
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    app.onDeviceReady= function() {
        app.receivedEvent('deviceready');
       
        
        //document.addEventListener('searchbutton', app.onSearchButton, false);
        //document.addEventListener('menubutton', app.onMenuButton, false);
        //document.addEventListener('backbutton', app.onBackButton, false);
        document.addEventListener('online',app.onOnline,false);
        document.addEventListener('offline',app.onOffline,false);
        
        // app init functions
		app.updateGeoPosition();
		
		//app.loadScripts();
		app.ready = true;
		app.executeQueue();
		console.log('Device ready');
        
        
    };
    
    app.loadScripts= function() {
    
        /*
        var scripts = 
	        "<script type='text/javascript' src='js/lib/jq.mvc.min.js'></script>\n"  +
	        "<script type='text/javascript' src='js/lib/jq.ui.min.js'></script>\n" +
	        "<script type='text/javascript' src='js/lib/jq.template.js'></script>\n" +
	        "<script type='text/javascript' src='js/ui.js'></script>\n";
	        
	     $('head').append(scripts);   
        */
    
    };
    
    // Update DOM on a Received Event
    app.receivedEvent = function(id) {
    
    /*
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
     */

        console.log('Received Event: ' + id);
    };
    
    // Handle the backbutton //
	app.onBackButton= function() {
		console.log('You hit the back button!');
		//alert('You hit the back button!',null,'Back');
	 };
	// Handle the menubutton //
	app.onMenuButton= function() {
		console.log('You hit the menu button!');
		//alert('You hit the menu button!',null,'Menu'); 
	};
	
	// Handle the searchbutton //
	app.onSearchButton= function() {
		console.log('You hit the search button!');
		//alert('You hit the search button!',null,'Search'); 
	};
	
	app.onOnline= function() {
		console.log('on online');
	};
	
	app.onOffline= function() {
		console.log('on offline');
	};

