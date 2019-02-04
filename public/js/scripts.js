$(document).on('ready', function() {

	// var march7_1 = new Date(2018,2,7,21)
	// var march7_2 = new Date(2018,2,8)
	// var march8 = new Date(2018,2,8,14)
	// var march8_2 = new Date(2018,2,8,15)
	// var march9 = new Date(2018,2,10)
	// var march10 = new Date(2018,2,10,14)

	// // console.log(march7_1.toString())
	// // console.log(march7_2.toString())
	// // console.log(march8.toString())
	// // console.log(march9.toString())
	// // console.log(march10.toString())


	// setInterval(function(){
	// 	if(Date.now()>=march7_1 && Date.now() <= march8)
	// 		{$('.theme_gen').show();
	// 		 $('.idea_submit').show();
	// 		}
	// 	else if(Date.now() > march8){
	// 		$('.theme_gen').hide();
	// 		$('.idea_submit').hide();
	// 	}
	// 	else{
	// 		$('.theme_gen').hide();
	// 		$('.idea_submit').hide();
			
	// 	}

	// 	if(Date.now() <= march7_2)
	// 	{
	// 		$('.maithacks_register').show()
	// 	}else {
	// 		$('.maithacks_register').hide()
	// 	}

	// 	if(Date.now() <= march8_2)
	// 	{
	// 		$('.pixel_register').show()
	// 	}else {
	// 		$('.pixel_register').hide()
	// 	}

	// 	if(Date.now() <= march9)
	// 	{
	// 		$('.codesaga_register').show()
	// 	}else {
	// 		$('.codesaga_register').hide()
	// 	}

	// 	if(Date.now() <= march9)
	// 	{
	// 		$('.workshop_register').show()
	// 	}else {
	// 		$('.workshop_register').hide()
	// 	}

	// },1000)

 	initSliders();
 	initScrollAnimation();
	 $('.swipebox').swipebox({autoplayVideos: true});
	 // Forms --
    var speed = 500;
    $(".form1_trigger").on('click', function(){
        $('div.forms:not(div.form1)').slideUp(speed);
        $('div.form1').slideToggle(speed);
        
    });
     $(".form2_trigger").on('click', function(){
        $('div.forms:not(div.form2)').slideUp(speed);
        $('div.form2').slideToggle(speed);
        

    });
      $(".form3_trigger").on('click', function(){
        $('div.forms:not(div.form3)').slideUp(speed);
        $('div.form3').slideToggle(speed);
        

    });
       $(".form4_trigger").on('click', function(){
        $('div.forms:not(div.form4)').slideUp(speed);
        $('div.form4').slideToggle(speed);
		});

		// $('.accordion-item .heading').on('click', function(e) {
		// 	e.preventDefault();
	
		// 	// Add the correct active class
		// 	if($(this).closest('.accordion-item').hasClass('active')) {
		// 			// Remove active classes
		// 			$('.accordion-item').removeClass('active');
		// 	} else {
		// 			// Remove active classes
		// 			$('.accordion-item').removeClass('active');
	
		// 			// Add the active class
		// 			$(this).closest('.accordion-item').addClass('active');
		// 	}
	
		// 	// Show the content
		// 	var $content = $(this).next();
		// 	$content.slideToggle(100);
		// 	$('.accordion-item .content').not($content).slideUp('fast');
	});
	
		
	// 	$('.submit-btn').on('click', function(event){
	// 		event.preventDefault();
	// 		event.stopPropagation();
	// 		var formElement = $(this).parents('form');
	// 		formElement.find('input:required').each(function(){
	// 				var minLength = 1;
	// 				var value = $(this).val();
	// 				var checked = true;
	// 				if(value.trim().length < minLength) {
	// 						console.log('length is not ok');
	// 						checked = false;
	// 				}

	// 				if(!checked){
	// 						alert('All required form Values are not filled correctly!');
	// 				} else {
	// 						console.log('all is ok');
	// 						formElement.submit();
	// 				}
	// 		});
	// });

/* Swiper slider */
function initSliders() {

    var gallerySwiper = new Swiper('#gallery-slider', {
		direction   : 'horizontal',

        slidesPerView: 4,
        slidesPerColumn: 1,

		speed		: 1000,
		nextButton	: '.arrow-right',
		prevButton	: '.arrow-left',
	
		autoplay    : 7000,
		autoplayDisableOnInteraction	: false,
    });

	$(window).on('resize', function(){

		var ww = $(window).width()
		if (ww > 1000) { gallerySwiper.params.slidesPerView = 4; }
		if (ww > 768 && ww <= 1000) { gallerySwiper.params.slidesPerView = 3; }
		if (ww > 480 && ww <= 767) { gallerySwiper.params.slidesPerView = 2; }
		if (ww <= 479) { gallerySwiper.params.slidesPerView = 1; }

		gallerySwiper.update();
	}).resize();

}
function initScrollAnimation() {

	window.sr = ScrollReveal();

	var scrollZoomIn = {
		duration: 400,
		scale    : 0.1,
		mobile: false,
		afterReveal: function (domEl) { $(domEl).css('transition', 'all .3s ease'); }
	};

	var scrollGalleryIn = {
		duration: 400,
		scale    : 0.1,
		mobile: false,
		afterReveal: function (domEl) { $(domEl).css('transition', 'all .3s ease'); }
	};

	var scrollTextFade = {
		duration: 2000,
		mobile: false,		
		afterReveal: function (domEl) { $(domEl).css('transition', 'all .3s linear'); }
	}

	var scrollTextFade2 = {
		duration: 400,
		opacity: 0,
		scale: 1,
		mobile: false,		
		afterReveal: function (domEl) { $(domEl).css('transition', 'all .3s linear'); }
	}


	var scrollFromLeft = {
		duration: 700,
		scale: 1,
		distance: '600px',
		origin:'left',
		mobile: false,		
		afterReveal: function (domEl) { $(domEl).css('transition', 'all .3s linear'); }
	}

	var scrollFromLeft2 = {
		duration: 500,
		scale: 1,
		easing: 'linear',
		distance: '600px',
		origin:'left',
		mobile: false,		
		afterReveal: function (domEl) { $(domEl).css('transition', 'all .3s ease'); }
	}

	var scrollFromTop = {
		duration: 500,
		scale: 1,
		easing: 'linear',
		distance: '600px',
		origin:'top',
		mobile: false,		
		afterReveal: function (domEl) { $(domEl).css('transition', 'all .3s ease'); }
	}

	var scrollFromRight = {
		duration: 700,
		scale: 1,
		distance: '600px',
		origin:'right',
		mobile: false,		
		afterReveal: function (domEl) { $(domEl).css('transition', 'all .3s linear'); }
	}

	var scrollSliderFull = {
		duration: 1200,
		scale : 1,
		easing   : 'ease-in-out',
		distance : '0px',
		mobile: false,			
		afterReveal: function (domEl) { $(domEl).css('transition', 'all .3s ease'); }
	}

	/* Every element initialized once */
	if ($('#slider-full').length) {

		sr.reveal('#slider-full span, #slider-full h1', scrollTextFade);
	}

	if ($('#prizes').length) {

		sr.reveal('#prizes .item-left', scrollFromLeft);
		sr.reveal('#prizes .item-center', scrollZoomIn);
		sr.reveal('#prizes .item-right', scrollFromRight);
	}
	
	if ($('#gallery').length) {

		sr.reveal('#gallery img', scrollGalleryIn, 40);
	}	

	if ($('footer').length) {

		sr.reveal('footer li, footer .date, footer .time', scrollTextFade2, 30);
	}	
	
$(window).on('resize', function(){
	var ww = $(window).width()
	
		if ($('#team .person_vinay').length) {
			sr.reveal('#team .person_vinay img', scrollGalleryIn, 40);
		}
		if ($('#team .deepali').length) {
			sr.reveal('#team .deepali img', scrollGalleryIn, 40);
		}
		if ($('#team .deepanshi').length) {
			sr.reveal('#team .deepanshi img', scrollGalleryIn, 40);
		}
		if ($('#team .sparsh').length) {
			sr.reveal('#team .sparsh img', scrollGalleryIn, 40);
		}
		if ($('#team .rajat').length) {
			sr.reveal('#team .rajat img', scrollGalleryIn, 40);
		}
		if ($('#team .saurabh').length) {
			sr.reveal('#team .saurabh img', scrollGalleryIn, 40);
		}
		if ($('#team .rishabh').length) {
			sr.reveal('#team .rishabh img', scrollGalleryIn, 40);
		}
		if ($('#team .heena').length) {
			sr.reveal('#team .heena img', scrollGalleryIn, 40);
		}
		if ($('#team .dhruv').length) {
			sr.reveal('#team .dhruv img', scrollGalleryIn, 40);
		}
		if ($('#team .vivek').length) {
			sr.reveal('#team .vivek img', scrollGalleryIn, 40);
		}
		if ($('#team .meghansh').length) {
			sr.reveal('#team .meghansh img', scrollGalleryIn, 40);
		}
		if ($('#team .siddharth').length) {
			sr.reveal('#team .siddharth img', scrollGalleryIn, 40);
		}
		if ($('#team .savitoj').length) {
			sr.reveal('#team .savitoj img', scrollGalleryIn, 40);
		}
		if ($('#team .arjun').length) {
			sr.reveal('#team .arjun img', scrollGalleryIn, 40);
		}
		if ($('#team .rasik').length) {
			sr.reveal('#team .rasik img', scrollGalleryIn, 40);
		}
		if ($('#team .nischay').length) {
			sr.reveal('#team .nischay img', scrollGalleryIn, 40);
		}
		if ($('#team .sachin').length) {
			sr.reveal('#team .sachin img', scrollGalleryIn, 40);
		}
		if ($('#team .jahnavi').length) {
			sr.reveal('#team .jahnavi img', scrollGalleryIn, 40);
		}
		if ($('#team .mudit').length) {
			sr.reveal('#team .mudit img', scrollGalleryIn, 40);
		}
		if ($('#team .deepanshu').length) {
			sr.reveal('#team .deepanshu img', scrollGalleryIn, 40);
		}
		if ($('#team .sarthak').length) {
			sr.reveal('#team .sarthak img', scrollGalleryIn, 40);
		}
		if ($('#team .deepanshu1').length) {
			sr.reveal('#team .deepanshu1 img', scrollGalleryIn, 40);
		}
		if ($('#team .karan').length) {
			sr.reveal('#team .karan img', scrollGalleryIn, 40);
		}
		if ($('#team .harsh').length) {
			sr.reveal('#team .harsh img', scrollGalleryIn, 40);
		}
		if ($('#team .zahid').length) {
			sr.reveal('#team .zahid img', scrollGalleryIn, 40);
		}
		if ($('#team .mayank').length) {
			sr.reveal('#team .mayank img', scrollGalleryIn, 40);
		}
		if ($('#team .raghav').length) {
			sr.reveal('#team .raghav img', scrollGalleryIn, 40);
		}
		if ($('#team .shivani').length) {
			sr.reveal('#team .shivani img', scrollGalleryIn, 40);
		}
	 

}).resize();

}



/* Google maps init */

function initMap() {
    var uluru = {lat: 28.719614, lng: 77.066186};
    var map = new google.maps.Map(document.getElementById('myMap'), {
      zoom: 16,
      center: uluru,
      styles: [
	  {
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#212121"
	      }
	    ]
	  },
	  {
	    "elementType": "labels.icon",
	    "stylers": [
	      {
	        "visibility": "on"
	      }
	    ]
	  },
	  {
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#757575"
	      }
	    ]
	  },
	  {
	    "elementType": "labels.text.stroke",
	    "stylers": [
	      {
	        "color": "#212121"
	      }
	    ]
	  },
	  {
	    "featureType": "administrative",
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#757575"
	      }
	    ]
	  },
	  {
	    "featureType": "administrative.country",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#9e9e9e"
	      }
	    ]
	  },
	  {
	    "featureType": "administrative.land_parcel",
	    "stylers": [
	      {
	        "visibility": "off"
	      }
	    ]
	  },
	  {
	    "featureType": "administrative.locality",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#bdbdbd"
	      }
	    ]
	  },
	  {
	    "featureType": "poi",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#757575"
	      }
	    ]
	  },
	  {
	    "featureType": "poi.park",
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#181818"
	      }
	    ]
	  },
	  {
	    "featureType": "poi.park",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#616161"
	      }
	    ]
	  },
	  {
	    "featureType": "poi.park",
	    "elementType": "labels.text.stroke",
	    "stylers": [
	      {
	        "color": "#1b1b1b"
	      }
	    ]
	  },
	  {
	    "featureType": "road",
	    "elementType": "geometry.fill",
	    "stylers": [
	      {
	        "color": "#2c2c2c"
	      }
	    ]
	  },
	  {
	    "featureType": "road",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#8a8a8a"
	      }
	    ]
	  },
	  {
	    "featureType": "road.arterial",
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#510b31"
	      }
	    ]
	  },
	  {
	    "featureType": "road.highway",
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#3c3c3c"
	      }
	    ]
	  },
	  {
	    "featureType": "road.highway.controlled_access",
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#4e4e4e"
	      }
	    ]
	  },
	  {
	    "featureType": "road.local",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#616161"
	      }
	    ]
	  },
	  {
	    "featureType": "transit",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#757575"
	      }
	    ]
	  },
	  {
	    "featureType": "water",
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#000000"
	      }
	    ]
	  },
	  {
	    "featureType": "water",
	    "elementType": "geometry.fill",
	    "stylers": [
	      {
	        "color": "#0c98e7"
	      }
	    ]
	  },
	  {
	    "featureType": "water",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#3d3d3d"
	      }
	    ]
	  }
	]
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
    
}



