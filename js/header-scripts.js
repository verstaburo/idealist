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

$(document).on('click', '.js-all-events', function(evt) {
  console.log('event-click');
  evt.preventDefault();
	evt.stopPropagation();
	$(this).toggleClass('active');
	$('.overlay').toggleClass('active');
	$(this).parent().toggleClass('active');
});

$('html').click(function(){
	$('.overlay').removeClass('active');
	$('.header__date').removeClass('active');
	$('.header__date .header__link').removeClass('active');
  $('.header__events').removeClass('active');
  $('.js-all-events').removeClass('active');
	$('.header__usermenu').removeClass('active');
	$('.header__username').removeClass('active');
	$('.header__account').removeClass('active');
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

// Фиксировать экран для самописных модальных окон
function fixscreen() {
  window.scroll = $(window).scrollTop();
  $("body").css('top', -scroll + 'px').addClass('noscroll');
}

function unfixscreen() {
  $("body").css('top', "0").removeClass('noscroll');
  $(window).scrollTop(scroll);
}

// Авторизация / регистрация
$('[data-link]').click(function(){
	var link = $(this).data('link');
	fixscreen();
	$('.header').addClass('active');
	$('.login').addClass('active');
	$('[data-login]').hide();
	$('[data-login="'+link+'"]').show();
	$('.login__success').hide();
});

$('#login').submit(function(e){
	e.preventDefault();
	unfixscreen();
	$('.header').removeClass('active');
	$('.login').removeClass('active');
	$('.header [data-link]').hide();
	$('.header__username').show();
});

$('#signup').submit(function(e){
	e.preventDefault();
	$(this).hide();
	$('.login__success').show();
});
