var mapPage = (function() {

	// private fields
	var m_map;
	var m_markers =  [];
	var that = {};
	
	// method defintions
	that.showMap = function() {
           		
           			console.log('updating location');
           			
           			var coords = app.geoCoords;
           			if(coords) {
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
						m_map=new google.maps.Map(mapElm,mapProp);
						
						console.log('updating map');
						
						this.updateMarkers();
					} // geolocation available
					


	};
	
	
	// private method to update marker array given a dragged marker on map
	var addMarkerListener = function(marker,coordIndex) {
	  				  
			      google.maps.event.addListener(marker, "dragstart", function(event) {
			            //map.closeInfoWindow();
			            console.log("Dragging marker...");
			        });
			        
			        google.maps.event.addListener(marker, "dragend", function(event) {
			        	console.log("End dragging marker.");
			            var center = marker.getPosition();
			            // update the coordinate reference
			            m_markers[coordIndex] = center;
			            console.log("Updated marker coords to [" + center.lat() + "," + center.lng() + "]");
			            
			           // marker.openInfoWindowHtml("<font color=black>" + myHtml + "<br>" + center.toString() + "</font>");
			        });
	  
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
	   m_markers = coordsArray;
	   
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
				map: m_map,
				position: coordsArray[i],
				title:title,
		        icon: googleUrl,
		        // allow the marker to be moved
		        draggable: true
			});
			
			 addMarkerListener(marker,i);
		    
			 bound.extend(marker.getPosition());

		}

		
		// scale the map
	    m_map.fitBounds(bound);
		
  
  }; // updateMarkers
  

  
  return that;
})();