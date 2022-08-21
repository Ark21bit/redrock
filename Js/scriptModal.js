$(document).ready(function($) {
	$('.btn_open_modal').click(function() {
		$('.modal').fadeIn();
		return false;
	});	

	$('.btn_open_modal').click(function() {
		$('.overlay').fadeIn();
		return false;
	});	
	
	$('.close_modal').click(function() {
		$(this).parents('.modal').fadeOut();
		return false;
	});	

	$('.close_modal').click(function() {
		$('.overlay').fadeOut();
		return false;
	});	

	$('.overlay').click(function() {
		$('.modal').fadeOut();
		return false;
	});		

	$('.overlay').click(function() {
		$('.overlay').fadeOut();
		return false;
	});	    
});