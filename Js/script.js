$(document).ready(function($) {
	$('.btn_payment').click(function() {
		$('.modal').fadeIn();
		return false;
	});	

	$('.btn_payment').click(function() {
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

    $( "#accordion" ).accordion({
        collapsible: true,       
        heightStyle: "content"        
    });
    
    $( "#tabs" ).tabs({
        active: 2
    });
});