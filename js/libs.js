svg4everybody();

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
      }).then(function() {
        console.log('jQuery bind complete');
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




