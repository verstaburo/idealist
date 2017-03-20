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