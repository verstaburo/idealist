// Фильтр фото в блоке Photos
$(document).ready(function(){
	var category = $('.photos__filter li.active').data('filter');
	$('.photos__card[data-category]').hide();
	$('.photos__card[data-category='+category+']').show();
});

$('.photos__filter li').click(function(){
	$(this).siblings().removeClass('active');
	$(this).addClass('active');
	var category = $(this).data('filter');
	$('.photos__card[data-category]').hide();
	$('.photos__card[data-category='+category+']').show();
});