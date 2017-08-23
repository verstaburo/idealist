svg4everybody();

// Кастомный скроллбар (jQuery Scrollbar)
$(document).ready(function(){
	$('.scrollbar-inner').scrollbar();
});

// Всплывающие окна
$(".fancybox").fancybox({
    fitToView   : false,
    autoSize    : true,
    openEffect  : 'fade',
    closeEffect : 'fade',
});

$(".js-photo").fancybox({
    fitToView: true,
    autoSize: true,
    autoResize: true,
    aspectRatio: true,
    openEffect: 'fade',
    closeEffect: 'fade',
    arrows: true,
    closeBtn: false,
    tpl: {
      image: '<img class="fancybox-image" src="{href}" alt="" /><a href="#" class="event__like"><img src="img/icon_like.svg" alt="@@">150</a>',
      next: '<button title="Next" class="fancybox-nav slider-arrow slider-arrow__right" type="button"></button>',
	    prev: '<button title="Previous" class="fancybox-nav slider-arrow slider-arrow__left" type="button"></button>'
    },
    loop: true
});

//button create party at index page

var parentEl = $('.create-party'),
    stickyEl = $('.create-party__link'),
    stopper = $('.footer');

if ($('.create-party').length > 0) {
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
}

//#######################
