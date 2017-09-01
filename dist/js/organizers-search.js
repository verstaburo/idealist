// Результат поиска в блоке Top organizers
$('.organizers__field').submit(function(event){
	event.preventDefault();
	$('.organizers__heading').html('Search<br> results');
	$('.organizers__list li').clone().appendTo('.organizers__list');
});