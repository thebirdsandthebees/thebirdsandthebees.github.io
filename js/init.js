(function($) {
	$(function() {

		$(".button-collapse").sideNav({
			menuWidth: 300,
			edge: "left",
			closeOnClick: false
		});

		$(document).ready(function() {
			$('.parallax').parallax();
			$('.modal-trigger').leanModal();
			var logo = document.querySelector(".intro");
			$(".brand-logo").attr("href", "../index.html");
			showHeader();
		});

		function showHeader() {
			var passedHeader = false;

			$(".brand-logo").addClass('grey-text text-darken-2');
			var headerBottomPosition = $("header h1").offset().top;
			$(document).scroll(function() {
				if($(document).scrollTop() > headerBottomPosition) {
					if(!passedHeader) {
						$(".brand-logo").fadeOut(100, function() {
							$(this).text($("header h1").html());
						}).fadeIn(100);
						passedHeader = true;
					}
				} else {
					if(passedHeader) {
						$(".brand-logo").fadeOut(100, function() {
							$(this).text("Birds and the Bees");
							$(this).attr("href", "../index.html");
						}).fadeIn(100);
						passedHeader = false;
					}
				}
			});
		}

	}); // end of document ready
})(jQuery); // end of jQuery name space
