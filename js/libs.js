svg4everybody();
objectFitImages();

// Кастомный скроллбар (jQuery Scrollbar)
$(document).ready(function(){
	$('.scrollbar-inner').scrollbar();
});

// Всплывающие окна
$(".fancybox").fancybox({
    fitToView   : false,
    autoSize    : true,
    openEffect  : 'fade',
    closeEffect : 'fade',
});

$('.js-popup-nocross').fancybox({
  fitToView   : false,
  autoSize    : true,
  autoResize: true,
  openEffect  : 'fade',
  closeEffect : 'fade',
  modal: true,
  helpers: {
    overlay: {
      closeClick: true
    }
  }
});

$('.js-popup-modal').fancybox({
  fitToView : false,
  autoSize: true,
  autoResize: true,
  openEffect  : 'fade',
  closeEffect : 'fade',
  modal: true,
  helpers: {
    overlay: {
      closeClick: true
    }
  },
  afterShow: function() {
    if ($(this.element).parent().hasClass('gift-list__item')) {
      $(this.content).attr('data-source-id', $(this.element)[0].id);
    }
  }
});

$(".js-photo").fancybox({
    fitToView: true,
    autoSize: true,
    autoResize: true,
    aspectRatio: true,
    openEffect: 'fade',
    closeEffect: 'fade',
    arrows: true,
    closeBtn: false,
    tpl: {
      image: '<img class="fancybox-image" src="{href}" alt="" /><a href="#" class="like"><svg><use xlink:href="img/icon.svg#icon_like"></use></svg><span class="like__counter"></span></a>',
      next: '<button title="Next" class="fancybox-nav slider-arrow slider-arrow__right" type="button"></button>',
	    prev: '<button title="Previous" class="fancybox-nav slider-arrow slider-arrow__left" type="button"></button>'
    },
    loop: true,
    afterShow: function () {
      var elem = this.element;
      console.log(elem);
      $(this.inner).find('.like__counter').text(this.element.data('like-counter'));
      $(this.inner).find('.like').click(function () {
        var voteCount = 0;
        if(!$(this).hasClass('vote')) {
          $(this).addClass('vote');
          voteCount = parseInt($(this).find('.like__counter').text()) + 1;
          $(this).find('.like__counter').text(voteCount);
          elem[0].setAttribute('data-like-counter', voteCount);
          $(elem).find('.like__counter').text(voteCount);
        }
      });
    }
});

$('.js-popup-close').click(function () {
  $.fancybox.close();
});

//button create party at index page

var parentEl = $('.create-party'),
    stickyEl = $('.create-party__link'),
    stopper = $('.footer');

if ($('.create-party').length > 0) {
  function Ascroll() {
    var parentElTop = $(parentEl).offset().top,
        parentElHeight = $(parentEl).outerHeight(),
        stickyElTop = $(stickyEl).offset().top;
        stickyElHeight = $(stickyEl).outerHeight(),
        stopperTop = $('.footer').offset().top,
        diff = parentElTop + parentElHeight + stickyElHeight - stopperTop;

    console.log(diff + ' ' + ($(window).scrollTop() + $(window).height()));

    if(($(window).scrollTop() + $(window).height()) <= parentElTop) {
      $(stickyEl).removeClass('not-sticky').addClass('sticky');
    } else {
      $(stickyEl).removeClass('sticky').addClass('not-sticky');
    }
  }

  $(window).scroll(Ascroll);
  $('body').scroll(Ascroll);
}

//#######################

//add class active to message at personal messages page

$('.messages__item').click(function () {
  event.preventDefault();
  $('.messages__item').each(function() {
    $(this).removeClass('active');
  });
  $(this).addClass('active');
});

//########

//height message column

function messageHeight() {
  var donorEl = $('.column_userinfo');
  var messagesEl = $('.messages');
  var donorHeight = $(donorEl).outerHeight();
  $(messagesEl).css({ height: donorHeight });
}

$(document).ready(messageHeight);
$(window).resize(messageHeight);

//#####

$('.like img').click(function (event) {
  console.log('click');
  var voteCount = 0;
  if(!$(this).hasClass('vote')) {
    $(this).addClass('vote');
    voteCount += $(this).find('.like__counter').text() + 1;
    $(this).find('.like__counter').text(voteCount);
  }
});

//upload avatar

var $uploadCrop;

function readFile(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $('.js-dropzone').hide();
      $('.js-imagepreview').show();
      $.fancybox.update();
      $uploadCrop.croppie('bind', {
        url: e.target.result
      }).then(function() {
        console.log('jQuery bind complete');
      });
    }

    reader.readAsDataURL(input.files[0]);
    } else {
      swal("Sorry - you're browser doesn't support the FileReader API");
    }
}

function readDropFile(droppedfiles) {
  if (droppedfiles[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $('.js-dropzone').hide();
      $('.js-imagepreview').show();
      $.fancybox.update();
      $uploadCrop.croppie('bind', {
        url: e.target.result
      });
    }

    reader.readAsDataURL(droppedfiles[0]);
    } else {
      swal("Sorry - you're browser doesn't support the FileReader API");
    }
}


$uploadCrop = $('.popup-upload__cropzone').croppie({
  viewport: {
    width: 150,
    height: 150
  },
  showZoomer: false,
  customClass: 'cropzone'
});

$('#upload-file').on('change', function () { readFile(this); });

$('.js-dropzone').on('drag dragstart dragend dragover dragenter dragleave drop', function(e) {
    e.preventDefault();
    e.stopPropagation();
  })
  .on('dragover dragenter', function() {
    $(this).addClass('dragover');
  })
  .on('dragleave dragend drop', function() {
    $(this).removeClass('dragover');
  })
  .on('drop', function(e) {
    var droppedFiles;
    droppedFiles = e.originalEvent.dataTransfer.files;
    readDropFile(droppedFiles);
});

$('.popup-upload__submit').on('click', function (ev) {
  ev.preventDefault();
  $.fancybox.close();
  $uploadCrop.croppie('result', {
    type: 'base64',
    size: 'viewport'
  }).then(function (resp) {
    $('.userinfo__avatar').find('img').attr('src', resp);
    $('#upload-form').find('input[type="hidden"]').remove();
    $('#upload-form').append('<input type="hidden" name="file[]" value="' + resp + '">');
    $('.js-dropzone').show().css({display: 'flex'});
    $('.js-imagepreview').hide();
    $.fancybox.update();
    $('#upload-form')[0].submit();
  });
});

$('.popup-upload__back').click(function () {
  $('.js-dropzone').show().css({display: 'flex'});
  $('.js-imagepreview').hide();
  $.fancybox.update();
});

$('body').keydown(function (event) {
  if (event.which === 27) {
    $.fancybox.close();
  }
});

//########

//Begin scripts for form event create

//form accordion

$( ".accordion" ).accordion({
  collapsible: true,
  header: '.accordion__title',
  active: false,
  classes: {
    "ui-accordion": "accordion",
    "ui-accordion-header": "accordion__title",
    "ui-accordion-header-active": "open",
    "ui-accordion-header-icon": "accordion__icon",
    "ui-accordion-content": "accordion__content",
    "ui-accordion-content-active": "open"
  },
  icons: false,
  heightStyle: "content"
});

//####

//swithch steps form

$(document).on('click', '.event-create__step', function (event) {
  var previousContent = $('.event-create__step.active').data('step-target');
  var nextContent = $(this).data('step-target');
  $('.event-create__step.active').removeClass('active', 250);
  $(this).addClass('active');
  $('.event-create__step-section').hide('blind', 400, function () {
    $(this).removeClass('active');
  });
  $('[data-step="' + nextContent + '"]').show('blind', 400, function () {
    $(this).addClass('active');
  });
});

$(document).on('click', '.js-next-form-section', function (event) {
  var previousContent = $(this).parents('.event-create__step-section').data('step');
  console.log(previousContent);
  var nextContent = $(this).data('step-target');
  $('.event-create__step.active').removeClass('active', 0).addClass('complete', 250);
  $('.event-create__step[data-step-target="' + nextContent + '"]').addClass('active');
  $('.event-create__step-section').hide('blind', 400, function () {
    $(this).removeClass('active');
  });
  $('[data-step="' + nextContent + '"]').show('blind', 400, function () {
    $(this).addClass('active');
  });
});

$(document).on('click', '.js-final-form', function(event) {
  event.preventDefault();
  var targetHref = $(this).attr('href');
  $(this).closest('form')[0].submit();
  document.location.replace(targetHref);
});

//#######

//upload cover

var $uploadCover;

function readCoverFile(files) {
  if (files && files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $('.js-dropzone-cover').hide().removeClass('active');
      $('.js-coverpreview').show().addClass('active');
      $('.image-upload__button_choose').show();
      $('.image-upload__button_save').show();
      $('.image-upload__button_edit').hide();
      $('.image-upload__button_next').hide();
      $('.image-upload__buttons').addClass('active');
      $uploadCover.croppie('bind', {
        url: e.target.result
      });
    }

    reader.readAsDataURL(files[0]);
    } else {
      swal("Sorry - you're browser doesn't support the FileReader API");
    }
}

$uploadCover = $('.image-upload__cropzone').croppie({
  viewport: {
    width: '64%',
    height: 355
  },
  showZoomer: false,
  enableResize: true,
  customClass: 'cover-cropzone'
});

$(document).on('change', '#upload-cover', function () {
  var files = this.files;
  readCoverFile(files);
});

$(document).on('drag dragstart dragend dragover dragenter dragleave drop', '.js-dropzone-cover', function(e) {
    e.preventDefault();
    e.stopPropagation();
  })
  .on('dragover dragenter', '.js-dropzone-cover', function() {
    $(this).addClass('dragover');
  })
  .on('dragleave dragend drop', '.js-dropzone-cover', function() {
    $(this).removeClass('dragover');
  })
  .on('drop', '.js-dropzone-cover', function(e) {
    var droppedFiles;
    droppedFiles = e.originalEvent.dataTransfer.files;
    readCoverFile(droppedFiles);
});

$(document).on('click', '.image-upload__button_save', function (ev) {
  ev.preventDefault();
  $uploadCover.croppie('result', {
    type: 'base64',
    size: 'original'
  }).then(function (resp) {
    $('.event__bg').attr('src', resp);
    $('.image-upload').find('input[type="hidden"]').remove();
    $('.image-upload').append('<input type="hidden" name="file[]" value="' + resp + '">');
    $('.js-coverpreview').hide().removeClass('active');
    $('.image-upload__button_choose').hide();
    $('.image-upload__button_save').hide();
    $('.image-upload__button_edit').show();
    $('.image-upload__button_next').show();
    $('.image-upload__result').addClass('active');
  });
});

$(document).on('click', '.image-upload__button_edit', function () {
  $('.image-upload__button_choose').show();
  $('.image-upload__button_save').show();
  $('.image-upload__button_edit').hide();
  $('.image-upload__button_next').hide();
  $('.image-upload__result').removeClass('active');
  $('.js-coverpreview').show().addClass('active');
});

//########

//contact group open

$(document).on('click', '.contact-group__open', function () {
  if ($(this).closest('.contact-group').hasClass('open')) {
    $(this).closest('.contact-group').removeClass('open', 0);
  } else {
    $(this).closest('.contact-group').addClass('open', 0);
  }
});

//######

//gift preview

$(document).on('change', '#gift-image', function () {
  var files = this.files;
  var output = $(this).closest('.form__action').siblings('.form__previews');
  var li = document.createElement('li');
  var img = document.createElement('img');
  li.setAttribute('class', 'form__preview-item');
  var reader = new FileReader();
  reader.readAsDataURL(files[0]);
  reader.onload = (function(theImg) {
    return function(e) {
      $(output).find('li').remove();
      $(img).attr('src', e.target.result);
      $(li).append(img);
      $(output).append(li);
    }
  })(files[0]);
});

//####

//gift choose

$(document).on('click', '.gift-choice__field', function () {
  $(this).closest('.gift-choice').addClass('active');
  $(this).closest('.form__col').prev().find('.form__label').addClass('active');
});

$(document).on('keydown', '.gift-choice__field', function (event) {
  var text = $(this).text();
  if (event.which == 27 ) {
    $(this).closest('.gift-choice').removeClass('active');
    $(this).closest('.gift-choice').find('.gift-choice__self').css({opacity: '', 'z-index': ''});
    $(this).closest('.gift-choice').find('.gift-choice__list').css({opacity: '', 'pointer-events' : ''});
    $(this).closest('.gift-choice').find('.gift-choice__field').attr('contenteditable', false)
    return false;
  } else if(event.which == 13) {
    $(this).closest('.gift-choice').removeClass('active');
    $(this).closest('.gift-choice').find('.gift-choice__self').css({opacity: '', 'z-index': ''});
    $(this).closest('.gift-choice').find('.gift-choice__input').val(text);
    $(this).closest('.gift-choice').find('.gift-choice__list').css({opacity: '', 'pointer-events' : ''});
    $(this).closest('.gift-choice').find('.gift-choice__field').attr('contenteditable', false)
    return false;
  } else {
    $(this).closest('.gift-choice').find('.gift-choice__self span').html(text);
  }
});

$(document).on('click', '.gift', function () {
  var giftName, giftPartner, giftImage;
  if ($(this).hasClass('js-nochoose')) {
    if ($(this).hasClass('js-mygift')) {
      $(this).closest('.gift-choice__list').css({opacity: 0, 'pointer-events' : 'none'});
      $(this).closest('.gift-choice').find('.gift-choice__field').attr('contenteditable', true).focus();
      $(this).closest('.gift-choice').find('.gift-choice__self').css({opacity: 1, 'z-index' : '51'});
      if($(this).parents('[data-source-id]').length > 0) {
        var sourceId = $(this).parents('[data-source-id]').data('source-id');
        $('#'+sourceId).closest('.gift-choice__list').css({opacity: 0, 'pointer-events' : 'none'});
        $('#'+sourceId).closest('.gift-choice').find('.gift-choice__self').css({opacity: 1, 'z-index' : '51'});
        $('#'+sourceId).closest('.gift-choice').find('.gift-choice__field').attr('contenteditable', true).focus();
        $.fancybox.close();
      }
    } else {
      $.fancybox.open();
    }
  } else {
    $(this).closest('.gift-choice').removeClass('active');
    giftName = $(this).data('value');
    giftPartner = $(this).data('partner');
    if( $(this).closest('.gift-choice').length >0 ) {
      giftImage = $(this).data('image');
      $(this).closest('.gift-choice').removeClass('active');
      $(this).closest('.gift-choice').find('.gift-choice__field').html(giftName + '<span>' + giftPartner + '</span>');
      $(this).closest('.accordion').find('.form__previews li').remove();
      $(this).closest('.accordion').find('.form__previews').append('<li class="form__preview-item"><img src="' + giftImage + '"></li>');
      $(this).closest('.gift-choice').find('.gift-choice__input').val(giftName);
    } else {
      giftImage = $(this).find('img').attr('src');
      var sourceId = $(this).parents('[data-source-id]').data('source-id');
      $('#'+sourceId).closest('.gift-choice').removeClass('active');
      $('#'+sourceId).closest('.gift-choice').find('.gift-choice__field').html(giftName + '<span>' + giftPartner + '</span>');
      $('#'+sourceId).closest('.accordion').find('.form__previews li').remove();
      $('#'+sourceId).closest('.accordion').find('.form__previews').append('<li class="form__preview-item"><img src="' + giftImage + '"></li>');
      $('#'+sourceId).closest('.gift-choice').find('.gift-choice__input').val(giftName);
      $.fancybox.close();
    }
    $('.form__label.active').removeClass('active');
  }
});

//gift collective or individual

$(document).on('change', '#gift-availability', function () {
  var giftType = $(this).val();
  console.log('change');
  $(this).closest('.accordion').find('.add-gifted').not('[data-gift-type="'+ giftType +'"]').addClass('hidden');
  $(this).closest('.accordion').find('[data-gift-type="'+ giftType +'"]').removeClass('hidden');
});

//###END scripts for form event create

$(window).on('load resize', function() {
  console.log('click');
  if($('.congratulation').length > 0) {
    console.log('click');
    var pageHeight = $(window).height() - $('header').outerHeight() - $('footer').outerHeight();
    $('.congratulation').css({ 'min-height': pageHeight });
  }
});


//featches tabs

$(document).on('click', '[data-tab-target]', function () {
  var tabTarget = $(this).data('tab-target');
  console.log('tab click');
  $(this).siblings().removeClass('active', 0);
  $(this).addClass('active', 0);
  $(this).closest('.featches').find('.featches__content').find('[data-tab]').fadeOut(400, function() { $(this).removeClass('active', 0); });
  $(this).closest('.featches').find('[data-tab="'+ tabTarget +'"]').fadeIn(400, function () { $(this).addClass('active', 0); });
});

//show more text

$(document).on('click', '.js-show-more', function (e) {
  e.preventDefault();
  if ($(this).hasClass('js-open')) {
    $(this).removeClass('js-open');
    $(this).text('read more');
    $(this).siblings('.hidden-text').hide('blind', 300);
  } else {
    $(this).addClass('js-open');
    $(this).text('back');
    $(this).siblings('.hidden-text').show('blind', 300);
  }
});

//validation settings

$(document).on('click', '.js-validation', function (e) {
  window.activeform = $(this).parents("form").attr("id");

  e.preventDefault();
  checkinputs();
  checkandsubmit();
  
});

function checkinputs() {
    // Проверка обычных полей на заполненность
    checkempty();
    
    // Проверка поля email
    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }
  
    function isTel(tel) {
        var regex = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
        return regex.test(tel);
    }
  
    if ( isEmail($('#'+activeform+' input[type="email"]').val()) === false) {
        $('#'+activeform+' input[type="email"]').parent().addClass("error");
        $('#'+activeform+' input[type="email"]').parent().append('<p class="error-message">Invalid mail input format</p>');
    } else {
      $('#'+activeform+' input[name="email"]').parent().removeClass("error");
      $('#'+activeform+' input[type="email"]').parent().find('.error-message').remove();
    }

    // Проверка номера телефона
    if ( isTel($('#'+activeform+' input[type="tel"]').val()) === false) {
      $('#'+activeform+' input[type="tel"]').parent().addClass("error");
      $('#'+activeform+' input[type="tel"]').parent().append('<p class="error-message">Invalid telephone format</p>');
    } else {$('#'+activeform+' input[type="tel"]').parent().removeClass("error");
           $('#'+activeform+' input[type="tel"]').parent().find('.error-message').remove();}
}

// 3. Проверка на ошибочные поля и отправка формы
function checkandsubmit() {
    window.formerrors = 0;
    $('#'+activeform).find(".error").each(function(){
        formerrors += 1; 
    });
    if (formerrors === 0) {
        $('#'+activeform).submit();
    }
}

// Скрипт проверки на пустое значение
function checkempty() {
    $('#'+activeform+' [data-required]').each(function(){
        if (!$(this).val()) {
            $(this).parent().addClass("error");
        } else {$(this).parent().removeClass("error");}
    });
}

// Убрать ошибку при изменении input'а
$("form input").on("keyup change", function(){
   $(this).parent().removeClass("error"); 
   $(this).parent().find('.error-message').remove();
    window.activeform = $(this).parents("form").attr("id");
    var inputs = $('#'+activeform+' [data-required]').length;
    window.formerrors = -1;
    
    $('#'+activeform+' [data-required]').each(function(){
        if (!$(this).val()) {
            formerrors += 1; 
          $(this).parent().addClass("error");
        } else {
          $(this).parent().removeClass("error");
        }
    });
    
    // Проверка поля email
    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }
  
    function isTel(tel) {
        var regex = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
        return regex.test(tel);
    }
  
    if ( isEmail($('#'+activeform+' input[type="email"]').val()) === false) {
        formerrors += 1; 
      $('#'+activeform+' input[type="email"]').parent().addClass("error");
    } else {
      $('#'+activeform+' input[type="email"]').parent().removeClass("error");
    }

    // Проверка номера телефона
    if ( isTel($('#'+activeform+' input[type="tel"]').val()) === false) {
        formerrors += 1; 
      $('#'+activeform+' input[type="tel"]').parent().addClass("error");
    } else {
      $('#'+activeform+' input[type="tel"]').parent().removeClass("error");
    }
    
    console.log(formerrors);
});
