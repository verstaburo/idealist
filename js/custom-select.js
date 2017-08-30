/* ########################### */
/* Выпадающие списки */
/* ########################### */
$(".selectbox").each(function(){
    $(this).find("option").each(function(){
        var ttext = $(this).text();
        var vval = $(this).val();
        var li = "<li data-val="+vval+">"+ttext+"</li>";
        $(this).parents(".selectbox").find("ul").append(li);
    });

    $(this).find("ul li").on('click', function(){
        var newval = $(this).data("val");
        $(this).parent().parent().find("select").val(newval).change();
		var inputval = $(this).parent().parent().find("select option[value="+newval+"]").val();
		$(this).parent().parent().find("input").val(inputval);
    });

    $(this).find("select").on("mousedown click", function(e){
        e.preventDefault();
        e.stopPropagation();
        this.blur();
        window.focus();
        $(this).parents(".selectbox").addClass("active");
    });

    $(this).find("ul").click(function(){
        $(this).removeClass("active");
    });

    $("html").click(function(){
        $(".selectbox").removeClass("active");
    });
});

$('.selectbox-multiple select').each( function() {
    $(this).children('option').each(function(){
        var ttext = $(this).text();
        var vval = $(this).val();
        var li = '<li data-val="'+vval+'">'+ttext+'<svg class="selectbox-multiple__button"><use xlink:href="img/icon.svg#icon_plus"></svg></li>';
        $(this).parents('.selectbox-multiple').find('ul').append(li);
    });

    console.log($(this));

    $(this).parent().find('ul li').on('click', function(event) {
        var newval = $(this).data('val');
        var newtext = $(this).text();
        $(this).addClass('selected');
        $(this).find('svg').html('<use xlink:href="img/icon.svg#icon_check">');
        $(this).parent().parent().children('select option[value="'+newval+'"]').prop('selected', true);
        $(this).parent().parent().children('.selectbox-multiple__value').text(newtext);
        if ($('.selectbox-output li[data-option="' + newval + '"]').length == 0) {
          $(this).parent().parent().siblings('.selectbox-output').append('<li data-option="' + newval + '">'+newtext+'<span class="selectbox-output__del">');
        }
    });

    $(this).parent().find('.selectbox-multiple__value').on('mousedown click', function(e){
        e.preventDefault();
        e.stopPropagation();
        this.blur();
        window.focus();
        $(this).closest('.selectbox-multiple').addClass('active');
    });

    $(this).parent().find('ul').on('click', function(){
        $(this).removeClass('active');
    });

    $(document).on('click', 'html', function(){
        $('.selectbox-multiple').removeClass('active');
    });

    $('.selectbox-output li').on('click', function () {
      var selectedDel = $(this).data('option');
      $(this).parent().siblings('.selectbox-multiple').find('select option[value="'+selectedDel+'"]').prop('selected', false);
      $(this).parent().siblings('.selectbox-multiple').find('ul li[data-val="'+selectedDel+'"]').removeClass('selected');
      $(this).remove();
    });
});
