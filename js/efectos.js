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
