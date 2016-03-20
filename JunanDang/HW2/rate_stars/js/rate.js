$(".empty-star").hover(
  function() {
    $(this).prevAll().andSelf().addClass("hover-star");
  },
  function() {
    $(this).prevAll().andSelf().removeClass("hover-star");
  }
);

$(".empty-star").click(function() {
  $(this).prevAll().andSelf().addClass("highlight-star");
  $(this).nextAll().removeClass("highlight-star");
});