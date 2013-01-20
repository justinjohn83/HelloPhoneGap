
var cameraPage = {
	takePicture: function() {
	
	   navigator.camera.getPicture(onSuccess, onFail, { quality: 50, allowEdit:true });
		function onSuccess(imgData) {
			var image = $('#camera_image');
			
			image.src = "data:image/jpeg;base64," + imgData;
		}
		function onFail(message) {
			alert("Failed because: " + message);
		}
	
	}
};