$(document).ready(function  () {
	$(window).scroll(function  () {
		$("#arriba").show("swing");
		$('#arriba').css("position","fixed");
		var altura = $(document).scrollTop();
		if (altura === 0) {
			$("#arriba").hide("swing");

		}

	});
});

setTimeout(function () {
	$("a.toplink").click(function() {
		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top + "px"
		}, {
			duration: 1000,
			easing: "swing"
		});
	return false;
	});

},4000);
