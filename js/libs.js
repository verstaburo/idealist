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