// Показ анимации загрузки при загрузке сайта и переходе между страницами
$(window).load(function () {
    $(".page-loading").addClass("hidden");
    setTimeout(function(){
      $(".page-loading").hide();
    }, 410);
});


$("a[href]").click(function(event){
	if (!($(this).hasClass('fancybox') || $(this).hasClass('js-photo'))) {
		var href = $(this).attr("href");
    	event.preventDefault();
    	$(".page-loading").show();
    	setTimeout(function(){
      	$(".page-loading").removeClass("hidden");
    	}, 1);
    	setTimeout(function(){
        	window.location.href = href;
    	}, 700);
	}
});