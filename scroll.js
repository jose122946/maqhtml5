
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
  	$('.row').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});
});



