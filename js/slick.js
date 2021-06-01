$(document).ready(function(){
	$('.slider').slick({
		  dots:false,
		  slidesToShow:3,
		  speed:1000,
		  easing:'ease',
		  infinite:true,
		  autoplay:true,
		  autoplaySpeed:2000,
		  touchThreshold:10,
		  waitForAnimate:false,
		  centerMode:false,
		  variableWidth:false,
         responsive: [
        {
     		 breakpoint: 767,
     		 settings: {
          		slidesToShow: 2,
          		 arrows: false
          	}
         },
         {
         	breakpoint: 319,
     		 settings: {
          		slidesToShow: 1
         }
     }
        ]
	});
});