$(document).ready(function() {
	$("#text_beijing").show();
	$("#text_shanghai").hide();
	$("#text_guangzhou").hide();
	$("#img_beijing").show();
	$("#img_shanghai").hide();
	$("#img_guangzhou").hide();
	$(this).css("border-width", "3px");
	$("#shanghai").css("border-width", "0px");
	$("#guangzhou").css("border-width", "0px");
	$(".city").hover(function(){
        $(this).css("background-color", "#e57f99");
        $(this).css("cursor", "pointer");
        }, function(){
        $(this).css("background-color", "#d6325b");
        $(this).css("cursor", "default");
    });


	$("#beijing").click(function() {
		$("#text_beijing").show();
		$("#text_shanghai").hide();
		$("#text_guangzhou").hide();
		$("#img_beijing").show();
		$("#img_shanghai").hide();
		$("#img_guangzhou").hide();
		$(this).css("border-width", "3px");
		$("#shanghai").css("border-width", "0px");
		$("#guangzhou").css("border-width", "0px");
	});
	
	$("#shanghai").click(function() {
		$("#text_beijing").hide();
		$("#text_shanghai").show();
		$("#text_guangzhou").hide();
		$("#img_beijing").hide();
		$("#img_shanghai").show();
		$("#img_guangzhou").hide();
		$(this).css("border-width", "3px");
		$("#beijing").css("border-width", "0px");
		$("#guangzhou").css("border-width", "0px");
	});
	
	$("#guangzhou").click(function() {
		$("#text_beijing").hide();
		$("#text_shanghai").hide();
		$("#text_guangzhou").show();
		$("#img_beijing").hide();
		$("#img_shanghai").hide();
		$("#img_guangzhou").show();
		$(this).css("border-width", "3px");
		$("#shanghai").css("border-width", "0px");
		$("#beijing").css("border-width", "0px");
	});
});


	
	