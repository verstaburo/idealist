$('.js-popup').fancybox({
	btnTpl : {
		smallBtn : '<button data-fancybox-close class="popup-close" title="{{CLOSE}}"></button>'
	}
});

$('[data-fancybox="all-photos"]').fancybox({
  loop: true,
  toolbar: false,
  baseTpl	:
		'<div class="fancybox-container" role="dialog" tabindex="-1">' +
			'<div class="fancybox-bg"></div>' +
			'<div class="fancybox-inner container">' +
				'<div class="fancybox-infobar">' +
					'<button data-fancybox-prev title="{{PREV}}" class="fancybox-button fancybox-button--left"></button>' +
					'<div class="fancybox-infobar__body">' +
						'<span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span>' +
					'</div>' +
					'<button data-fancybox-next title="{{NEXT}}" class="fancybox-button fancybox-button--right"></button>' +
				'</div>' +
				'<div class="fancybox-toolbar">' +
					'{{BUTTONS}}' +
				'</div>' +
				'<div class="fancybox-navigation">' +
					'<button data-fancybox-prev title="{{PREV}}" class="slider-arrow slider-arrow__left" />' +
					'<button data-fancybox-next title="{{NEXT}}" class="slider-arrow slider-arrow__right" />' +
				'</div>' +
				'<div class="fancybox-stage"></div>' +
				'<div class="fancybox-caption-wrap">' +
					'<div class="fancybox-caption"></div>' +
				'</div>' +
			'</div>' +
		'</div>',
});