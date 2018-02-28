<!-- Для выпадающего меню навигации в мобильной версии -->
				
	$('#menuShow').click(function() {
		if($('#mobileMenu').is(':visible'))
			$('#mobileMenu').hide ();
		else
			$('#mobileMenu').show ();
	});

		window.onresize = function (event) {
			$('#mobileMenu').hide ();
	}; 
					