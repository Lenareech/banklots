<!-- При скроллинге вниз, навигация будет закрепляться, код -->
$(document).scroll(function() {
	if ($(document).width() > 785) {	
		if ($(document).scrollTop() > $('header').height() + 10)
			$('nav').addClass('fixed');
		else
			$('nav').removeClass('fixed');
	}	
});
