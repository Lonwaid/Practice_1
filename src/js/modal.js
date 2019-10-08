$(document).ready(function(){
	var button = $('#button');
	var modal = $('#modal');
	var close = $('#close');
	var buttonUp = $('#buttonUp');

	button.on('click', function(){
		modal.addClass('modal_active');
	});

	close.on('click', function(){
		modal.removeClass('modal_active');
	});

	buttonUp.on('click', function(){
		$('body,html').animate({
			scrollTop: 0
		}, 400);
	});

});