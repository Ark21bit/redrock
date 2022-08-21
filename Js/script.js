$(document).ready(function($) {

    $( "#accordion" ).accordion({
        collapsible: true,       
        heightStyle: "content",    
		header: '> .accordion-item > .accordion-header'    
    });
    
    $( "#tabs" ).tabs({
        active: 1				
    });	
});