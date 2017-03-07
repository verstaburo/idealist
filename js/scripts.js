// Результат поиска в блоке Top organizers
$('.organizers__field').submit(function(event){
	event.preventDefault();
	$('.organizers__heading').html('Search<br> results');
	$('.organizers__list li').clone().appendTo('.organizers__list');
});



// Подсказка в шапке
$(document).ready(function(e){
	$('.overlay').addClass('active');
	$('.header__hint').addClass('active');
})
$('html').click(function(){
	$('.overlay').removeClass('active');
	$('.header__hint').removeClass('active');
})

// Календарь
$('.header__date .header__link').click(function(e){
	e.preventDefault();
	e.stopPropagation();
	$('.overlay').addClass('active');
	$(this).parent().addClass('active');
})
$('html').click(function(){
	$('.overlay').removeClass('active');
	$('.header__date').removeClass('active');
})





// Расположение блоков на главной
$(document).ready(function(){
	columnChange();
});

$(window).resize(function(){
	columnChange();
});

function columnChange() {
	$('[data-desktop]').each(function(){
			if ($(window).width() > 1170) {
				var columnname = $(this).data('desktop');
			}

			if ($(window).width() <= 1170 && $(window).width() > 1024) {
				var columnname = $(this).data('desktopsmall');
			}

			if ($(window).width() <= 1024 && $(window).width() > 640) {
				var columnname = $(this).data('tablet');
			}

			if ($(window).width() <= 640) {
				var columnname = $(this).data('mobile');
			}

			var column = $('.column[data-column='+columnname+']')
			var priority = $(this).data('priority');
			if (priority == "high") {
				$(this).prependTo(column);
			} else if (priority == "medium") {
				$(this).prependTo(column);
				$(this).insertAfter($('.column[data-column='+columnname+'] [data-priority="high"]'))
			} else {
				$(this).appendTo(column);
			}
		});
}





// Кастомный скроллбар (jQuery Scrollbar)
$(document).ready(function(){
	$('.scrollbar-inner').scrollbar();
});
