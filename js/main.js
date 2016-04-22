var $cherubs = $('.cherubs');

$cherubs.waypoint(function (direction) {
  if (direction == 'down') {
    $cherubs.addClass('js-cherubs-animate');
    } else {
    $cherubs.removeClass('js-cherubs-animate');
  }
}, { offset: '50%'});
