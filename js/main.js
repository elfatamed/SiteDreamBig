(function ($) {
    "use strict";
    
        // meanmenu
        $('#mobile-menu').meanmenu({
            meanScreenWidth: "767",
            meanMenuContainer: '.mobile-menu-active'
        });
    
//Slider -active
$('.slider-active').owlCarousel({
     loop:true,
     /*margin:10,*/
     nav:true,
     autoplay:true,
     navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
     responsive:{
         0:{
             items:1,
             nav:false
         },
         600:{
             items:1   /*3*/
         },
         1000:{
             items:1   /*5*/
         }
     }
 })

//project - active
 $('.project-active').owlCarousel({
    loop:true,
   /* margin:10,*/
    nav:true,
    dots:false,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
   
    responsive:{
        0:{
            items:1
        },
        768:{
            items:3   /*3*/
        },
        1000:{
            items:4 /*5*/
        }
    }
})

//video popup 
$('.popup-video').magnificPopup({

    type: 'iframe',
    // other options
  });



  $('.blog-active').owlCarousel({
    loop:true,
   /* margin:10,*/
    nav:true,
    dots:false,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
   
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.brand-active').owlCarousel({
    loop:true,
   /* margin:10,*/
    nav:true,
    dots:false,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
   
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        992:{
            items:5
        },
        1000:{
            items:6
        }
    }
})
function basicmap() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 11,
        scrollwheel: false,
        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(40.6700, -73.9400), // New York
        // This is where you would paste any style found on Snazzy Maps.
        styles: [
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#193341"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#2c5a71"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#29768a"
                    },
                    {
                        "lightness": -37
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#406d80"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#406d80"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#3e606f"
                    },
                    {
                        "weight": 2
                    },
                    {
                        "gamma": 0.84
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [
                    {
                        "weight": 0.6
                    },
                    {
                        "color": "#1a3541"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#2c5a71"
                    }
                ]
            }
        ]
    };
    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('contact-map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.6700, -73.9400),
        map: map,
        title: 'Cryptox'
    });
}
if ($('#contact-map').length != 0) {
    google.maps.event.addDomListener(window, 'load', basicmap);
}

$('.counter').counterUp({
    delay: 10,
    time: 1000
});

})(jQuery);	
