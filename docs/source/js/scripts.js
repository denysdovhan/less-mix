jQuery(document).ready(function($) {
	// Stuff to do as soon as the DOM is ready;
/*
	$(window).resize(function() {
		// Adaptiblity setings
		var width = window.innerWidth;
		var height = window.innerHeight;
		var welcome_wrapper = $('.welcome-wrapper');

		welcome_wrapper.width(width).height(height - 50);

		var circle_height = $('.circle').width();
		var central_circle_height = $('.circle.central').width();
		$('.circle').height(circle_height);
		$('.circle.central').height(central_circle_height);
	});
*/
	$(window).resize();


	var nav = $('.nav');
	var check = nav.offset().top;

	$(window).scroll(function() {
		if ($(this).scrollTop() > check) {
			nav.addClass('fixed');
			$('.page_wrapper').css('margin-top', '40px');
		} else {
			nav.removeClass('fixed');
			$('.page_wrapper').css('margin-top', '');
		}
	});


	$('a[href^=#]').click( function(e) {
		var element = $(this).attr('href');
		var offsetTop = $(element).offset().top - 60;
		$('body,html').stop().animate({scrollTop : offsetTop}, 1000);
		return false;
	});
});