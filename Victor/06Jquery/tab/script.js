$(document).ready(function(){

    $(".tabs").on("click", "li", function(){
        $(".tabs li").removeClass("activetab");
        $(this).addClass("activetab");
        var index = $(this).index("li");
        $(".content p").removeClass("active");
        $(".content p").eq(index).addClass("active");

    })

});