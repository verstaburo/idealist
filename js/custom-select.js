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

    $(this).find("ul li").click(function(){
        var newval = $(this).data("val");
        $(this).parent().parent().find("select").val(newval);
		var inputval = $(this).parent().parent().find("select option[value="+newval+"]").text();
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