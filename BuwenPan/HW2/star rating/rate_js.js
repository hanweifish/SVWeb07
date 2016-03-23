//javascript file for index
$(document).ready(function(){
	var isRate = [0, 0, 0, 0, 0];
	
	$("svg").mouseover(function() {
		$(this).css("cursor", "pointer");

	});
	$("svg").mouseout(function() {
		$(this).css("cursor", "default");
	});

	//hover for star 1
    $("svg.one").mouseover(function(){
        $(this).css("fill", "#ffd128");
    });
    $("svg.one").mouseout(function(){
    	if (isRate[0] == 0)
        	$(this).css("fill", "A9A9A9");
    });

	//hover for star 2
    $("svg.two").mouseover(function(){
        $(this).css("fill", "#ffd128");
        $(".one").css("fill", "#ffd128");
    });
    $("svg.two").mouseout(function(){
    	if (isRate[1] == 0) {
    		$(this).css("fill", "#A9A9A9");
    	}
		if (isRate[0] == 0) {
    		$(".one").css("fill", "#A9A9A9");
    	} 
    });

	//hover for star 3
	$("svg.three").mouseover(function(){
        $(this).css("fill", "#ffd128");
        $(".one").css("fill", "#ffd128");
		$(".two").css("fill", "#ffd128");
    });
    $("svg.three").mouseout(function(){
    	if (isRate[2] == 0) {
    		$(this).css("fill", "#A9A9A9");
    	} 
		if (isRate[0] == 0) {
    		$(".one").css("fill", "#A9A9A9");
    	} 
		if (isRate[1] == 0) {
    		$(".two").css("fill", "#A9A9A9");
    	} 
    });
	
	//hover for star 4
	$("svg.four").mouseover(function(){
        $(this).css("fill", "#ffd128");
        $(".one").css("fill", "#ffd128");
		$(".two").css("fill", "#ffd128");
		$(".three").css("fill", "#ffd128");
    });
    $("svg.four").mouseout(function(){
    	if (isRate[3] == 0) {
    		$(this).css("fill", "#A9A9A9");
    	} 
		if (isRate[0] == 0) {
    		$(".one").css("fill", "#A9A9A9");
    	} 
		if (isRate[1] == 0) {
    		$(".two").css("fill", "#A9A9A9");
    	} 
		if (isRate[2] == 0) {
    		$(".three").css("fill", "#A9A9A9");
    	} 
    });
	
	//hover for star 5
	$("svg.five").mouseover(function(){
        $(this).css("fill", "#ffd128");
        $(".one").css("fill", "#ffd128");
		$(".two").css("fill", "#ffd128");
		$(".three").css("fill", "#ffd128");
		$(".four").css("fill", "#ffd128");
    });
    $("svg.five").mouseout(function(){
    	if (isRate[4] == 0) {
    		$(this).css("fill", "#A9A9A9");
    	} 
		if (isRate[0] == 0) {
    		$(".one").css("fill", "#A9A9A9");
    	} 
		if (isRate[1] == 0) {
    		$(".two").css("fill", "#A9A9A9");
    	} 
		if (isRate[2] == 0) {
    		$(".three").css("fill", "#A9A9A9");
    	} 
		if (isRate[3] == 0) {
    		$(".four").css("fill", "#A9A9A9");
    	}
    });
    $("svg.one").mousedown(function(){
    	isRate[0] = 1;
    	isRate[1] = 0;
    	isRate[2] = 0;
    	isRate[3] = 0;
    	isRate[4] = 0;
    	$(this).css("fill", "#ffd128");
    	$(".two").css("fill", "#A9A9A9");
    	$(".three").css("fill", "#A9A9A9");
    	$(".four").css("fill", "#A9A9A9");
    	$(".five").css("fill", "#A9A9A9");
    	$("#demo").text("1 star");
    });

    $("svg.two").mousedown(function(){
    	isRate[0] = 1;
    	isRate[1] = 1;
    	isRate[2] = 0;
    	isRate[3] = 0;
    	isRate[4] = 0;
    	$(this).css("fill", "#ffd128");
    	$(".one").css("fill", "#ffd128");
    	$(".three").css("fill", "#A9A9A9");
    	$(".four").css("fill", "#A9A9A9");
    	$(".five").css("fill", "#A9A9A9");
    	$("#demo").text("2 stars");
    });

    $("svg.three").mousedown(function(){
    	isRate[0] = 1;
    	isRate[1] = 1;
    	isRate[2] = 1;
    	isRate[3] = 0;
    	isRate[4] = 0;
    	$(this).css("fill", "#ffd128");
    	$(".one").css("fill", "#ffd128");
    	$(".two").css("fill", "#ffd128");
    	$(".four").css("fill", "#A9A9A9");
    	$(".five").css("fill", "#A9A9A9");
    	$("#demo").text("3 stars");
    });

    $("svg.four").mousedown(function(){
    	isRate[0] = 1;
    	isRate[1] = 1;
    	isRate[2] = 1;
    	isRate[3] = 1;
    	isRate[4] = 0;
    	$(this).css("fill", "#ffd128");
    	$(".one").css("fill", "#ffd128");
    	$(".two").css("fill", "#ffd128");
    	$(".three").css("fill", "#ffd128");
    	$(".five").css("fill", "#A9A9A9");
    	$("#demo").text("4 stars");
    });

    $("svg.five").mousedown(function(){
    	isRate[0] = 1;
    	isRate[1] = 1;
    	isRate[2] = 1;
    	isRate[3] = 1;
    	isRate[4] = 1;
    	$(this).css("fill", "#ffd128");
    	$(".one").css("fill", "#ffd128");
    	$(".two").css("fill", "#ffd128");
    	$(".three").css("fill", "#ffd128");
    	$(".four").css("fill", "#ffd128");
    	$("#demo").text("5 stars");
    });
});
