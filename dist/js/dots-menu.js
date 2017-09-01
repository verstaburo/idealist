// Dots Menu
$('.dots').click(function(e){
	e.preventDefault();
	e.stopPropagation();
	$(this).find('.dots__menu').addClass('active');
});

$('html').click(function(){
	$('.dots__menu').removeClass('active');
});