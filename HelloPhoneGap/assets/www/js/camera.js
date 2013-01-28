
var cameraPage = {
	takePicture: function() {
	
	   navigator.camera.getPicture(onSuccessUri, onFail, 
	   { 
		   quality: 35, 
		   allowEdit:true, 
		   destinationType:Camera.DestinationType.FILE_URI 
	   });
	  	 
		function onSuccessRaw(imgData) {
			console.log("Got image data...");
			
			var image = $('#camera_image');
			
			image.attr("src","data:image/jpeg;base64," + imgData);
		}
		function onSuccessUri(imgUri) {
			console.log("Got image uri..." + imgUri);
			
			var image = $('#camera_image');
			
			image.attr("src",imgUri);
		}
		function onFail(message) {
			console.log("Failed because: " + message);
			alert("Failed because: " + message);
		}
	
	}
};