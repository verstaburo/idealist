// Подсказка в шапке
/*$(document).ready(function(e){
	$('.overlay').addClass('active');
	$('.header__hint').addClass('active');
});

$('.overlay, .header__hint').click(function(){
	$('.overlay').removeClass('active');
	$('.header__hint').removeClass('active');
});*/

// Календарь
$('.header__date .header__link').click(function(e){
	e.preventDefault();
	e.stopPropagation();
	$(this).toggleClass('active');
	$('.overlay').toggleClass('active');
	$(this).parent().toggleClass('active');
});

$('html').click(function(){
	$('.overlay').removeClass('active');
	$('.header__date').removeClass('active');
	$('.header__date .header__link').removeClass('active');
	$('.header__usermenu').removeClass('active');
	$('.header__username').removeClass('active');
	$('.header__account').removeClass('active');
});

// Вход в аккаунт
$('.header__account > .header__link').click(function(e){
	e.preventDefault();
	$('.header__account > .header__link').hide();
	$('.header__username').show();
});

// Меню аккаунта
$('.header__username').click(function(e){
	e.preventDefault();
	e.stopPropagation();
	$(this).toggleClass('active');
	$('.header__account').toggleClass('active');
	$('.overlay').toggleClass('active');
	$('.header__usermenu').toggleClass('active');
});

// Выход из аккаунта
$('.header__usermenu .logout a').click(function(e){
	e.preventDefault();
	$('.overlay').removeClass('active');
	$('.header__usermenu').removeClass('active');
	$('.header__username').hide().removeClass('active');
	$('.header__account > .header__link').show();
});


