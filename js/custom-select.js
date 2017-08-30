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
      var liSelected = '<li class="selected" data-val="'+vval+'">'+ttext+'<svg class="selectbox-multiple__button"><use xlink:href="img/icon.svg#icon_check"></svg></li>';
      var selectState = $(this).prop('selected');

      if(selectState) {
        $(this).parents('.selectbox-multiple').find('ul').append(liSelected);
      } else {
        $(this).parents('.selectbox-multiple').find('ul').append(li);
      }

    });

    $(document).on('click', '.selectbox-multiple ul li', function(event) {
        var newval = $(this).data('val');
        var newtext = $(this).text();
        console.log( $(this).closest('.selectbox-multiple').find('select option[value="'+newval+'"]'));
        $(this).addClass('selected');
        $(this).find('svg').html('<use xlink:href="img/icon.svg#icon_check">');
        $(this).closest('.selectbox-multiple').find('select option[value="'+newval+'"]').prop('selected', true);
        $(this).closest('.selectbox-multiple').find('.selectbox-multiple__value').text(newtext);
        if (!$(this).closest('.selectbox-multiple').siblings('.selectbox-output').find(' li[data-option="' + newval + '"]').length > 0) {
          var tagEl = '<li data-option="' + newval + '">'+newtext+'<span class="selectbox-output__del">';
          $(this).closest('.selectbox-multiple').siblings('.selectbox-output').append(tagEl);
        }
    });

    $(this).closest('.selectbox-multiple').find('.selectbox-multiple__value').on('mousedown click', function(e){
        e.preventDefault();
        e.stopPropagation();
        this.blur();
        window.focus();
        $(this).closest('.selectbox-multiple').addClass('active');
    });

    $(this).closest('.selectbox-multiple').find('ul').on('click', function(){
        $(this).removeClass('active');
    });

    $(document).on('click', 'html', function(){
        $('.selectbox-multiple').removeClass('active');
    });

    $(document).on('click', '.selectbox-output li', function () {
      var selectedDel = $(this).data('option');
      $(this).closest('.selectbox-output').siblings('.selectbox-multiple').find('select option[value="'+selectedDel+'"]').prop('selected', false);
      $(this).closest('.selectbox-output').siblings('.selectbox-multiple').find('ul li[data-val="'+selectedDel+'"]').removeClass('selected');
      $(this).closest('.selectbox-output').siblings('.selectbox-multiple').find('ul li[data-val="'+selectedDel+'"]').find('use').attr('xlink:href', 'img/icon.svg#icon_plus');
      $(this).remove();
    });
});
