jQuery(function($) {
  var index = 0,
      slideshow = $('.slideshow'),
      count = slideshow.find('li').length;

  setInterval(function() {
    var newIndex = index + 1;
    if(newIndex >= count) { newIndex = 0; }

    slideshow.find('li:eq(' + index + ')').fadeOut(1000);
    slideshow.find('li:eq(' + newIndex + ')').fadeIn(1000);

    index = newIndex;
  }, 2500);
});
