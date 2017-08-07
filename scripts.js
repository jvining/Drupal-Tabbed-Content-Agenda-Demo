// Dyanmically add the plus/minus toggle to the header 
$(document).ready(function() {
	$('.panel-collapse').has('.panel-body').prev().children('.panel-title').prepend('<i class="fa fa-plus-circle"></i> ');
	$('.panel-collapse').has('in').prev().children('.panel-title').children().removeClass('fa-plus-circle').addClass('fa-minus-circle');
});
// Agenda Panel Show More/Less Toggle
$(document).ready(function() {
	$('#toggle').click(function() {
		if ($('.panel-collapse').hasClass('in')) {
			$('.panel-collapse').removeClass('in');
			$('#toggle').html('+ Show All Session Details');
			$('.panel-title').children('i').removeClass('fa-minus-circle').addClass('fa-plus-circle');
		} else {
			$('.panel-collapse').addClass('in');
			$('#toggle').html('- Hide All Session Details');
			$('.panel-title').children('i').removeClass('fa-plus-circle').addClass('fa-minus-circle');
		}
	});
});
// Agenda Single Panel Toggle
$(document).ready(function() {
	$('.panel-title').click(function() {
		$(this).children('i').toggleClass('fa-plus-circle').toggleClass('fa-minus-circle');
 	});
});
