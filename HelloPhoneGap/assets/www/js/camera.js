
var cameraPage = {
	takePicture: function() {
	
	   navigator.camera.getPicture(onSuccessUri, onFail, 
	   { 
		   quality: 25, 
		   allowEdit:true, 
		   	targetWidth: 128,
	        targetHeight: 128,
		   //destinationType:Camera.DestinationType.FILE_URI 
	   });
	   
	   // FIXME: having issues getting onSuccess called see
	   //http://stackoverflow.com/questions/9303701/phonegap-app-quits-after-camera-captures-image-android
	   // also see http://code.google.com/p/foreground-camera-plugin/
	   // and http://stackoverflow.com/questions/8368091/phonegap-camera-restarts-the-application/9524643#
	  	 
		function onSuccessRaw(imgData) {
			console.log("Got image data...");
			console.log("imgData=" + imgData);
			
			var image = $('#camera_image');
			
			image.attr("src","data:image/jpeg;base64," + imgData);
			//image.attr("src",imgData);
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