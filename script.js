// JavaScript Document

$('document').ready(function(e) {
    
	//CREATES RIDGES
	function createRidges(){
		
		// VARIABLES FOR THE FUNCTION
		var channelsHeight = parseFloat($('.channels').css("height"));
		var ridgeMargin = parseFloat($('.ridge').css("margin-top"));
		var ridgeHeight = $('.ridge').height();
		var ridge = parseInt(ridgeMargin) + parseInt(ridgeHeight);
		var totalRidges = channelsHeight/ridge;
		var container = $('.channels');
		
		// LOOP THAT CREATES THE RIDGES
		for (var i = 0; i < totalRidges; i++){
			container.append("<div class = \"ridge\" id = \"" + i + "\"></div>");

		}	
	}

	// CREATES RIDGES BASED ON FIXED DIMENSIONS
		var channelsHeight = 1440;
		var ridgeMargin = parseFloat($('.ridge').css("margin-top"));
		var ridgeHeight = $('.ridge').height();
		var ridge = parseInt(ridgeMargin) + parseInt(ridgeHeight);
		var totalRidges = channelsHeight/ridge;
		var container = $('.channels');
	
	// LOOP THAT CREATES THE RIDGES
		for (var i = 0; i < totalRidges; i++){
			container.append("<div class = \"ridge\" id = \"" + i + "\"></div>");

		}	
	
	//createRidges();
	createRidgesFixed();
});