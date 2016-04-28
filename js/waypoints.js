var $cherubs = $('.cherubs');
var $beigeBox = $('.beige-box');

$beigeBox.waypoint(function (direction) {
  if (direction == 'down') {
    $cherubs.addClass('js-cherubs-animate');
  } else {
    $cherubs.removeClass('js-cherubs-animate');
  }
}, {offset: (document.documentElement.clientWidth < 590) ? '10%' : '25%' });


