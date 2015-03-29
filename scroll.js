
/*$(window).scroll(function() {
    var height = $(window).scrollTop();
console.log(height);
    if(height >= 200 && height <= 207) {
   	$("#menu").toggle(400);
    $("#menu").toggleClass('menu');
    $("#menu").slideToggle(400);
       
    }
  
});*/
$(function(){	
    var cubuk_seviye = $(document).scrollTop();
    var header_yuksekligi = $('.yapiskan').outerHeight();

    $(window).scroll(function() {
        var kaydirma_cubugu = $(document).scrollTop();

        if (kaydirma_cubugu > header_yuksekligi){$('.yapiskan').addClass('gizle');
    	$('.yapiskan').addClass('menu-op');} 
        else {$('.yapiskan').removeClass('gizle');
        $('.yapiskan').removeClass('menu-op');}

        if (kaydirma_cubugu > cubuk_seviye){$('.yapiskan').removeClass('sabit');} 
        else {$('.yapiskan').addClass('sabit');}				

        cubuk_seviye = $(document).scrollTop();	
     });
  	
});



