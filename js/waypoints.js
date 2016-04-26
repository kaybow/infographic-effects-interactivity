var $cherubs = $('.cherubs');
var $beigeBox = $('.beige-box');

$beigeBox.waypoint(function (direction) {
  if (direction == 'down') {
    $cherubs.addClass('js-cherubs-animate');
  } else {
    $cherubs.removeClass('js-cherubs-animate');
  }
}, {offset: (document.documentElement.clientWidth < 590) ? '10%' : '25%' });

$('.red-heart').on('click', function () {
  $('.red-heart').toggleClass('move-heart');
});

$('.circle1').on('click', function () {
  $('.circle1').toggleClass('circle-grow');
});

$('.circle2').on('click', function () {
  $('.circle2').toggleClass('circle-grow');
});

$('.circle3').on('click', function () {
  $('.circle3').toggleClass('circle-grow');
});
