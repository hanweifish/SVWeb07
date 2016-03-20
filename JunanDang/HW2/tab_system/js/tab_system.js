$(document).ready(function() {
  $(".tabs li").click(function() {
    var tab_id = $(this).attr("data-tab");
    $("li.active").removeClass("active");
    $(this).addClass("active");
    $(".tab-content").removeClass("active");
    $("#"+tab_id).addClass("active");
  });
});