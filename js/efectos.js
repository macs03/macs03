$(document).ready(function  () {
	$(window).scroll(function  () {
		$("#arriba").show("swing");
		$('#arriba').css("position","fixed");
		var altura = $(document).scrollTop();
		if (altura === 0) {
			$("#arriba").hide("swing");
			
		}
		
	});
	
	$('#ingles').click(function() {
		$.ajax({
			url: 'ingles.html',
			success: function(data) {
				$('#body').html(data);
				$('#body').slideDown(1000);
			}
		});
	});
	$('#spanish').click(function() {
		$.ajax({
			url: 'index.html',
			success: function(data) {
				$('#body').html(data);
				$('#body').slideDown(1000);
			}
		});
	});
});
