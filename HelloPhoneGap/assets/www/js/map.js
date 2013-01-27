var mapPage = (function() {

	var map;
	var markers =  [];
	var that = {};
	that.showMap = function() {
           		
           			console.log('updating location');
           			
           			var coords = app.geoCoords;
           			
           			$('#location').html(
           					'Latitute: ' + coords.latitude + '<br />' +
           					'Longitude: ' +coords.longitude + '<br/>' + 
           					'Accuracy: ' + coords.accuracy + 'm <br/>');
           		
					var mapProp = {
						  center:new google.maps.LatLng(coords.latitude,coords.longitude),
						  zoom:9,
						  minZoom: 4,
		 				  maxZoom: 17,
						  mapTypeId:google.maps.MapTypeId.ROADMAP
						  };
					
				    var mapElm = $('#map_canvas')[0];
					this.map=new google.maps.Map(mapElm,mapProp);
					
					console.log('updating map');
					
					this.updateMarkers();
					


	};
	
	
	that.updateMarkers = function() {
  
		// calculate the bounding box of th emarkets so we can center about it

	   var minLat = null;
	   var minLng = null;
	   var maxLat = null;
	   var maxLng = null;
	   
	   // TODO:
	   var coordsArray = [new google.maps.LatLng(app.geoCoords.latitude,app.geoCoords.longitude)];
	   // keep track of currently set markers
	   this.markers = coordsArray;
	   
		for(var i = 0; i < coordsArray.length; ++i) {
		
			var position = coordsArray[i];
			
		    // LatLng			
		    
		    new google.maps.LatLng(lat,lng);
			var lat = position.lat();
			var lng = position.lng();
			
			if(minLat == null || lat < minLat) {
				minLat = lat;
			}
			if(maxLat == null || lat > maxLat) {
				maxLat = lat;
			}
			
			if(minLng == null || lng < minLng) {
				minLng = lng;
			}
			if(maxLng == null || lng > maxLat) {
				maxLng = lng;
			}
		
		}
		
		// take the midpoint
		var lat = (minLat + maxLat) / 2;
		var lng = (minLng + maxLng) / 2;
		
		// this will be our center
		var latlng = new google.maps.LatLng(lat,lng);
		
		// set the markers
 
        // scale map to fit all markers
 	    var bound = new google.maps.LatLngBounds();
 	   
		for(var i = 0; i < coordsArray.length; ++i) {
		
			// TODO: use real title
			var title = "Me";
		    var markerTitle = (i+1);
		    
		    var googleUrl = "http://chart.googleapis.com/chart?chst=d_map_spin&chld=0.7|0|A8D0F0|12|_|" + markerTitle;
			
		    var marker = new google.maps.Marker({
				map: this.map,
				position: coordsArray[i],
				title:title,
		        icon: googleUrl
			});
		    
			 bound.extend(marker.getPosition());

		}
		
		// scale the map
	    this.map.fitBounds(bound);
		
  
  };
  
  return that;
})();