var mapPage = {


showMap : function() {
           		
           			console.log('updating location');
           			
           			var coords = app.geoCoords;
           			
           			$('#location').html(
           					'Latitute: ' + coords.latitude + '<br />' +
           					'Longitude: ' +coords.longitude + '<br/>' + 
           					'Accuracy: ' + coords.accuracy + 'm <br/>');
           		
					var mapProp = {
						  center:new google.maps.LatLng(coords.latitude,coords.longitude),
						  zoom:9,
						  mapTypeId:google.maps.MapTypeId.ROADMAP
						  };
					
				    var mapElm = $('#map_canvas')[0];
					var map=new google.maps.Map(mapElm,mapProp);
					
					console.log('updating map');
					


	}
};