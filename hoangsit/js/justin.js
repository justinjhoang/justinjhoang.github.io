/* Scrolling Functions */

$("#about-button").on('click', function() {
	$('html, body').animate({
	    scrollTop: $("#about").offset().top - 90
	}, 1000);
});

$("#services-button").on('click', function() {
	$('html, body').animate({
	    scrollTop: $("#services").offset().top - 90
	}, 1000);
});

$("#contact-button").on('click', function() {
	$('html, body').animate({
	    scrollTop: $("#footer").offset().top - 90
	}, 1000);
});

$("#action-button").on('click', function() {
	$('html, body').animate({
	    scrollTop: $("#footer").offset().top
	}, 1000);
});