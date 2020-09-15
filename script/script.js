jQuery(document).ready(function ($) {

	/*--*--*--*--*--*--*--*--*--*--*-*--*--*--*--*--*--*--*--*

		* ------- Slider ------- *

	-*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*/

	$('.slider').slick({
		prevArrow: '<a href="#" class="slick-prev"><img src="image/left.svg" width="10" height="20"></a>',
		nextArrow: '<a href="#" class="slick-next"><img src="image/right.svg" width="10" height="20"></a>',
		asNavFor: '.slider-nav',
		adaptiveHeight: true,
		slidesToShow: 1,
		fade: true,
		arrows: true,
	});

	$('.slider-nav').slick({
		prevArrow: '<a href="#" class="slick-prev"><img src="image/left.svg" width="10" height="20"></a>',
		nextArrow: '<a href="#" class="slick-next"><img src="image/right.svg" width="10" height="20"></a>',
		asNavFor: '.slider',
		arrows: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: false,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 970,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});



	/*--*--*--*--*--*--*--*--*--*--*-*--*--*--*--*--*--*--*--*

		* ------- Tabs ------- *

	-*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*/

	$('nav > a').click(function (e) {

		var tabID = $(this).attr('href');

		// Close all tabs
		$('main > section, nav > a').removeClass('active');

		// Activate the current tab
		$(this).addClass('active');
		$('main > section' + tabID).addClass('active');

		e.preventDefault();

	});


});