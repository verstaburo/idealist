// выпадающие меню в форме поиска Maps
$('.search__select').click(function(e){
	e.preventDefault();
	$(this).parent().toggleClass('active');
});

$('.search__hidden-close').click(function(e){
	e.preventDefault();
	$(this).parents('.search__field').removeClass('active');
});

// переключатель в форме поиска Maps
$('.search__selector').click(function(e){
	e.preventDefault();
	$(this).toggleClass('active');
	$(this).siblings().toggleClass('active');
});

$('.search__option').click(function(e){
	e.preventDefault();
	if (!$(this).hasClass('active')) {
		$(this).toggleClass('active');
		$(this).siblings().toggleClass('active');	
	}
});