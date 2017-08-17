var parentEl = $('.create-party'),
    stickyEl = $('.create-party__link'),
    stopper = $('.footer');

function Ascroll() {
  var parentElTop = $(parentEl).offset().top,
      parentElHeight = $(parentEl).outerHeight(),
      stickyElTop = $(stickyEl).offset().top;
      stickyElHeight = $(stickyEl).outerHeight(),
      stopperTop = $('.footer').offset().top,
      diff = parentElTop + parentElHeight + stickyElHeight - stopperTop;
  
  console.log(diff + ' ' + ($(window).scrollTop() + $(window).height()));
  
  if(($(window).scrollTop() + $(window).height()) <= parentElTop) {
    $(stickyEl).removeClass('not-sticky').addClass('sticky');
  } else {
    $(stickyEl).removeClass('sticky').addClass('not-sticky');
  }
}

$(window).scroll(Ascroll);
$('body').scroll(Ascroll);