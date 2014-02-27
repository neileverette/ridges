// JavaScript Document

$('document').ready(function(e) {
    
	//CREATES RIDGES
	function createRidges(){
		
		// VARIABLES FOR THE FUNCTION
		var previewSize = .4;
		var channelSize = 1-previewSize;
		var windowHeight = $(window).height();
		var windowWidth = $(window).width();
		
		// SET CSS STYLES
		$('.preview').css("height", windowHeight*previewSize);  //previewSize*windowHeight
		$('.channels').css("height", windowHeight*channelSize);  //previewSize*windowHeight
		
		// VARIABLES FOR THE FUNCTION
		//var channelsHeight = parseFloat($('.channels').css("height"));
		var ridgeMargin = parseFloat($('.ridge').css("margin-top"));
		var ridgeHeight = parseFloat($('.ridge').css("height"))
		var totalRidge = ridgeMargin + ridgeHeight;
		var numberOfRidges = channelSize*windowHeight/totalRidge;
		
		console.log("Window height is " + windowHeight);
		console.log("Window width is " + windowWidth);
		console.log("Preview panel is  " + windowHeight*previewSize);
		console.log("Channels panel is " + windowHeight*channelSize);
		console.log("Ridget height is "+  ridgeHeight);
		console.log("Ridget margin is "+  ridgeMargin);
		console.log("Total ridge size is "+  totalRidge);	
		console.log("Number of ridges that fits is " + numberOfRidges );
	
		
		//LOOP THAT CREATES THE RIDGES
		for (var i = 0; i < numberOfRidges; i++){
			$('.channels').append("<div class = \"ridge\" id = \"" + i + "\"></div>");
		}	
	}

	
	createRidges();
});