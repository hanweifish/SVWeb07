function clickTag() {
  $(this).closest('.tags').find('li').removeClass('highlight');
  $(this).addClass('highlight');
  $('article').removeClass('show');
  $('#' + $(this).index('.tags li')).addClass('show');
}

$(document).ready(function(){
  $('.tags').on('click', 'li', clickTag);
});