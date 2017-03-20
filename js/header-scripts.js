// Подсказка в шапке
/*$(document).ready(function(e){
	$('.overlay').addClass('active');
	$('.header__hint').addClass('active');
});

$('.overlay, .header__hint').click(function(){
	$('.overlay').removeClass('active');
	$('.header__hint').removeClass('active');
});*/

// Календарь
$('.header__date .header__link').click(function(e){
	e.preventDefault();
	e.stopPropagation();
	$('.overlay').addClass('active');
	$(this).parent().addClass('active');
});

$('html').click(function(){
	$('.overlay').removeClass('active');
	$('.header__date').removeClass('active');
});
