(function($) {
    'use strict';

    jQuery(document).ready(function() {

		/*PRELOADER JS*/
		$(window).load(function() { 
			$('.spinner').fadeOut();
			$('.preloader').delay(350).fadeOut('slow'); 
		}); 
		/*END PRELOADER JS*/
			
		
		/* START MENU JS */
			$('.main_menu a').bind('click', function (event) {
				var $anchor = $(this);
				$('html').stop().animate({
					scrollTop: $($anchor.attr('href')).offset().top - 0
				}, 1000);
				event.preventDefault();
			});

			$(window).on('scroll', function() {
			  if ($(this).scrollTop() > 100) {
				$('.menu-top').addClass('menu-shrink');
			  } else {
				$('.menu-top').removeClass('menu-shrink');
			  }
			});
			
			$(document).on('click','.navbar-collapse.in',function(e) {
			if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
			});				
		/* END MENU JS */
			
	
		/* START APP-SCREENS */		
		
		$('.app_screens_slider').slick({
			slidesToShow: 4,
			slidesToScroll: 4,
			centerPadding: '0px',
			autoplay: false,
			dots: false,
			autoplaySpeed: 5000,		
			responsive: [
				{
				breakpoint: 991,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 1,
					}
				}
			]
		});		
		/* START APP-SCREENS */

		// Start Review slider
		$('.review_slider').slick({
			slidesToShow: 3,
			slidesToScroll: 3,
			centerPadding: '0px',
			autoplay: false,
			dots: false,
			autoplaySpeed: 5000,		
			responsive: [
				{
				breakpoint: 991,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 1,
					}
				}
			]
		});		
		
		// END Review slider
		
		// Active AOS
		
		 AOS.init();
	
    });
})(jQuery);

