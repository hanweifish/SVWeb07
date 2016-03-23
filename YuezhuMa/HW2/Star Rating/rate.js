// Code goes here
function rate() {
  $(this).prevAll().andSelf().css('color', '#FE9A2E');
}

function unrate() {
  $(this).prevAll().andSelf().css('color', '#BDBDBD');
}

function score() {
  $('#score').html(parseInt($(this).index('.star li')) + 1);
}

$(document).ready(function(){
  //mouse move
  $('.star').on('mouseover', 'li', rate);
  $('.star').on('mouseout', 'li', unrate);
  $('.star').on('mouseover', 'li', score);
  
  //final score
  $('.star').on('click', 'li', function(){
    score;
    $('.star').off('mouseover', 'li', score);
    rate;
    $('.star').off('mouseover', 'li', rate);
    $('.star').off('mouseout', 'li', unrate);
  });
});


