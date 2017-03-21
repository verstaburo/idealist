// Меню Following
$('.following__actions').click(function(e){
	e.preventDefault();
	e.stopPropagation();
	$(this).next().addClass('active');
});

$('html').click(function(){
	$('.following__menu').removeClass('active');
});