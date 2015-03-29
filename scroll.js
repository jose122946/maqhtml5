$(function()
	{	
$(window).scroll(function() {
    var height = $(window).scrollTop();

    if(height  > 40) {
       $("#menu").addClass('menu-op');
    }
    else
    {
    	$("#menu").removeClass('menu-op');
    }
});


	});