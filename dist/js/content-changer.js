// Фильтры
$(document).ready(function(){
	var category = $('[data-filter].active').data('filter');
	if (category == "all") {
		$('.photos__card[data-category]').show();
	} else {
		$('.photos__card[data-category]').hide();
		$('.photos__card[data-category='+category+']').show();
	}
});

$('[data-filter]').click(function(){
	$(this).siblings().removeClass('active');
	$(this).addClass('active');
	var category = $(this).data('filter');
	if (category == "all") {
		$('[data-category]').show();
	} else {
		$('[data-category]').hide();
		$('[data-category='+category+']').show();
	}
});