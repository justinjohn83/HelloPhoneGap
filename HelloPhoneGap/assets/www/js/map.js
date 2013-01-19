
$(document).ready(function() {
	mapPage.initialize();	
}
);


var mapPage = {
showMap : function() {



           // geolocation
           var options = {enableHighAccuracy: true,timeout:5000};
           navigator.geolocation.getCurrentPosition(
           		function(position) {
           		
           			console.log('updating location');
           			
           			$('#location').html(
           					'Latitute: ' + position.coords.latitude + '<br />' +
           					'Longitude: ' + position.coords.longitude + '<br/>' + 
           					'Accuracy: ' + position.coords.accuracy + 'm <br/>');
           		
					var mapProp = {
						  center:new google.maps.LatLng(position.coords.latitude,position.coords.longitude),
						  zoom:8,
						  mapTypeId:google.maps.MapTypeId.ROADMAP
						  };
					
				    var mapElm = $('#map_canvas')[0];
					var map=new google.maps.Map(mapElm,mapProp);
					
					console.log('updating map');
					
				},
           		
           		function(error) {
           			$('#location').html('ERROR (' + error.code + '): ' + error.message);
           		
           		},
           		
           		options);		

	},
	
	initialize: function() {
	        document.addEventListener('deviceready', this.showMap, false);
	
	}
};