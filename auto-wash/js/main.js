(function ($) {
	"use strict";

	jQuery(document).ready(function($){
		
		$('#auto-wash-main-slider .carousel-inner .item:first-child').addClass('active');
		
		$('.blog_inner').masonry({
		  itemSelector: '.single_blog'
		});
		
		$('.counter').counterUp({
            delay: 10,
            time: 1000
        });
		
		$('.home_single_blog_img i').click(function(){
			$('.home_single_blog_img img').css('transform', 'scale(1.3)');
		});
		
		$(function () {
			$.scrollUp();
		});
		

	});


		
	jQuery(document).ready(function($){	
				
		//google api
		var myCenter=new google.maps.LatLng(55.864237,-4.251806);
		var marker;

		function initialize()
		{
		var mapProp = {
		  center:myCenter,
		  zoom:16,
		  scrollwheel: false,
		  mapTypeId:google.maps.MapTypeId.ROADMAP
		  };
		var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

		var marker=new google.maps.Marker({
		  position:myCenter,
		  animation:google.maps.Animation.BOUNCE
		  });

		marker.setMap(map);
		}
		google.maps.event.addDomListener(window, 'load', initialize);
		
	});

}(jQuery));	