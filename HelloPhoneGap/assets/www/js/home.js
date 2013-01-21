var homePage =  {

    showInfo: function() {
    
    
    	// FIXME:
    	if(typeof(device) !== "undefined") {
	            $('#props').html('Device Name: ' + device.name + '<br />' + 
	            				  'Device PhoneGap: ' + device.phonegap + '<br />' + 
	            				  'Device Platform: ' + device.platform + '<br/>' + 
	            				  'Device UUID: ' + device.uuid + '<br />' + 
	            				  'Device Version: ' + device.version + '<br />');
	 	}
	 	else {
	 		console.log('device undefined!');
	 	}
        console.log('showInfo called');
           
           
     }




};