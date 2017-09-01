// Музыка в блоке Music
$('.music__list li').click(function(){
	$(this).siblings().removeClass('active');
	$(this).addClass('active');
});

$('.music__play').click(function(){
	$(this).toggleClass('paused');
});