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

$('.js-popup-nocross').fancybox({
  fitToView   : false,
  autoSize    : true,
  openEffect  : 'fade',
  closeEffect : 'fade',
  modal: true,
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
      image: '<img class="fancybox-image" src="{href}" alt="" /><a href="#" class="like"><svg><use xlink:href="img/icon.svg#icon_like"></use></svg><span class="like__counter"></span></a>',
      next: '<button title="Next" class="fancybox-nav slider-arrow slider-arrow__right" type="button"></button>',
	    prev: '<button title="Previous" class="fancybox-nav slider-arrow slider-arrow__left" type="button"></button>'
    },
    loop: true,
    afterShow: function () {
      var elem = this.element;
      console.log(elem);
      $(this.inner).find('.like__counter').text(this.element.data('like-counter'));
      $(this.inner).find('.like').click(function () {
        var voteCount = 0;
        if(!$(this).hasClass('vote')) {
          $(this).addClass('vote');
          voteCount = parseInt($(this).find('.like__counter').text()) + 1;
          $(this).find('.like__counter').text(voteCount);
          elem[0].setAttribute('data-like-counter', voteCount);
        }
      });
    }
});

$('.js-popup-close').click(function () {
  $.fancybox.close();
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

//add class active to message at personal messages page

$('.messages__item').click(function () {
  event.preventDefault();
  $('.messages__item').each(function() {
    $(this).removeClass('active');
  });
  $(this).addClass('active');
});

//########

//height message column

function messageHeight() {
  var donorEl = $('.column_userinfo');
  var messagesEl = $('.messages');
  var donorHeight = $(donorEl).outerHeight();
  $(messagesEl).css({ height: donorHeight });
}

$(document).ready(messageHeight);
$(window).resize(messageHeight);

//#####

$('.like img').click(function (event) {
  console.log('click');
  var voteCount = 0;
  if(!$(this).hasClass('vote')) {
    $(this).addClass('vote');
    voteCount += $(this).find('.like__counter').text() + 1;
    $(this).find('.like__counter').text(voteCount);
  }
});
