function resizePages() {
    var h = $(window).height();
    var height = h > 850 ? 850 : h;
    $('.fullscreen').css('height', height);
    /* $('firstSection').css('height',height*0.98);*/
}

$(window).resize(function (e) {
    resizePages();
    google.maps.event.trigger(map, "resize");
});
resizePages();

$(document).ready(function () {


    $("#info h2").fitText(1.2, {
        minFontSize: '30px',
        maxFontSize: '46px'
    });

    $("#location h2").fitText(1.2, {
        minFontSize: '30px',
        maxFontSize: '60px'
    });


    $("#pricing h2").fitText(1.2, {
        minFontSize: '30px',
        maxFontSize: '50px'
    });
    $('.sub-headline').fitText(1.7, {
        minFontSize: '10px',
        maxFontSize: '40px'
    });


    $('#features h3').fitText(1.4, {
        minFontSize: '15px',
        maxFontSize: '45px'
    });

    $("#contact h3").fitText(1.2, {
        minFontSize: '35px',
        maxFontSize: '55px'
    });

    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 600, 'swing');
                return false;
            }
        }
    });

    //set your google maps parameters

    var $latitude = 52.093086,
        $longitude = 5.119047,
        $map_zoom = 15;
    //google map custom marker icon - .png fallback for IE11
    var is_internetExplorer11 = navigator.userAgent.toLowerCase().indexOf('trident') > -1;
    var $marker_url = (is_internetExplorer11) ? 'images/map-marker.png' : 'images/map-marker.svg';

    //define the basic color of your map, plus a value for saturation and brightness
    var $main_color = '#2f4016',
        $saturation = 1,
        $brightness = 1;

    //we define here the style of the map
    var style = [
        {
            //set saturation for the labels on the map
            elementType: "labels",
            stylers: [
                {
                    saturation: $saturation
                }
			]
		},
        { //poi stands for point of interest - don't show these lables on the map 
            featureType: "poi",
            elementType: "labels",
            stylers: [
                {
                    visibility: "off"
                }
			]
		},
        {
            //don't show highways lables on the map
            featureType: 'road.highway',
            elementType: 'labels',
            stylers: [
                {
                    visibility: "off"
                }
	        ]
	    },
        {
            //don't show local road lables on the map
            featureType: "road.local",
            elementType: "labels.icon",
            stylers: [
                {
                    visibility: "off"
                }
			]
		},
        {
            //don't show arterial road lables on the map
            featureType: "road.arterial",
            elementType: "labels.icon",
            stylers: [
                {
                    visibility: "off"
                }
			]
		},
        {
            //don't show road lables on the map
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [
                {
                    visibility: "off"
                }
			]
		},
		//style different elements on the map
        {
            featureType: "transit",
            elementType: "geometry.fill",
            stylers: [
                {
                    hue: $main_color
                },
                {
                    visibility: "on"
                },
                {
                    lightness: $brightness
                },
                {
                    saturation: $saturation
                }
			]
		},
        {
            featureType: "poi",
            elementType: "geometry.fill",
            stylers: [
                {
                    hue: $main_color
                },
                {
                    visibility: "on"
                },
                {
                    lightness: $brightness
                },
                {
                    saturation: $saturation
                }
			]
		},
        {
            featureType: "poi.government",
            elementType: "geometry.fill",
            stylers: [
                {
                    hue: $main_color
                },
                {
                    visibility: "on"
                },
                {
                    lightness: $brightness
                },
                {
                    saturation: $saturation
                }
			]
		},
        {
            featureType: "poi.sport_complex",
            elementType: "geometry.fill",
            stylers: [
                {
                    hue: $main_color
                },
                {
                    visibility: "on"
                },
                {
                    lightness: $brightness
                },
                {
                    saturation: $saturation
                }
			]
		},
        {
            featureType: "poi.attraction",
            elementType: "geometry.fill",
            stylers: [
                {
                    hue: $main_color
                },
                {
                    visibility: "on"
                },
                {
                    lightness: $brightness
                },
                {
                    saturation: $saturation
                }
			]
		},
        {
            featureType: "poi.business",
            elementType: "geometry.fill",
            stylers: [
                {
                    hue: $main_color
                },
                {
                    visibility: "on"
                },
                {
                    lightness: $brightness
                },
                {
                    saturation: $saturation
                }
			]
		},
        {
            featureType: "transit",
            elementType: "geometry.fill",
            stylers: [
                {
                    hue: $main_color
                },
                {
                    visibility: "on"
                },
                {
                    lightness: $brightness
                },
                {
                    saturation: $saturation
                }
			]
		},
        {
            featureType: "transit.station",
            elementType: "geometry.fill",
            stylers: [
                {
                    hue: $main_color
                },
                {
                    visibility: "on"
                },
                {
                    lightness: $brightness
                },
                {
                    saturation: $saturation
                }
			]
		},
        {
            featureType: "landscape",
            stylers: [
                {
                    hue: $main_color
                },
                {
                    visibility: "on"
                },
                {
                    lightness: $brightness
                },
                {
                    saturation: $saturation
                }
			]

		},
        {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [
                {
                    hue: $main_color
                },
                {
                    visibility: "on"
                },
                {
                    lightness: $brightness
                },
                {
                    saturation: $saturation
                }
			]
		},
        {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [
                {
                    hue: $main_color
                },
                {
                    visibility: "on"
                },
                {
                    lightness: 10
                },
                {
                    saturation: $saturation
                }
			]
		},
        {
            featureType: "water",
            elementType: "geometry",
            stylers: [
                {
                    hue: "#343f51"
                },
                {
                    visibility: "on"
                },
                {
                    lightness: 10
                },
                {
                    saturation: -10
                }
			]
		}
	];

    
      var isDraggable = $(document).width() > 480 ? true : false; // If document (your website) is wider than 480px, isDraggable = true, else isDraggable = false
    
    //set google map options
    var map_options = {
            center: new google.maps.LatLng($latitude, $longitude),
            zoom: $map_zoom,
        draggable: isDraggable,
            panControl: false,
            zoomControl: false,
            mapTypeControl: false,
            streetViewControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
            styles: style,
            
        }
        //inizialize the map
    var map = new google.maps.Map(document.getElementById('google-container'), map_options);


    var fenway = {
        lat: $latitude,
        lng: $longitude
    };



    //add a custom marker to the map				


    var marker = new google.maps.Marker({
        position: new google.maps.LatLng($latitude, $longitude),
        map: map,
        visible: true,
        icon: $marker_url,
        title: "Neude 2 bis, 3512 AD Utrecht",
        animation: google.maps.Animation.DROP,
        animation: google.maps.Animation.BOUNCE,

    });
    /*     marker.addListener('click', toggleBounce);*/



    google.maps.event.addDomListener(window, "resize", function () {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    });


    marker.tooltipContent = 'This';
    var infoWindow = new google.maps.InfoWindow({
        content: '<IMG BORDER="0" ALIGN="Left" SRC="images/hackercafe-location.jpg"><br>Neude 2 bis, 3512 AD Utrecht'
    });

    $(".gm-style-iw").next("div").hide();
    
    google.maps.event.addListener(marker, 'click', function () {
        if (!marker.open) {
            infoWindow.open(map, marker);
            marker.open = true;
        } else {
            infoWindow.close();
            marker.open = false;
        }
        google.maps.event.addListener(map, 'click', function () {
            infoWindow.close();
            marker.open = false;
        });
    });


    function fromLatLngToPoint(latLng, map) {
        var topRight = map.getProjection().fromLatLngToPoint(map.getBounds().getNorthEast());
        var bottomLeft = map.getProjection().fromLatLngToPoint(map.getBounds().getSouthWest());
        var scale = Math.pow(2, map.getZoom());
        var worldPoint = map.getProjection().fromLatLngToPoint(latLng);
        return new google.maps.Point((worldPoint.x - bottomLeft.x) * scale, (worldPoint.y - topRight.y) * scale);
    }

    //add custom buttons for the zoom-in/zoom-out on the map
    function CustomZoomControl(controlDiv, map) {
        //grap the zoom elements from the DOM and insert them in the map 
        var controlUIzoomIn = document.getElementById('cd-zoom-in'),
            controlUIzoomOut = document.getElementById('cd-zoom-out');
        controlDiv.appendChild(controlUIzoomIn);
        controlDiv.appendChild(controlUIzoomOut);

        // Setup the click event listeners and zoom-in or out according to the clicked element
        google.maps.event.addDomListener(controlUIzoomIn, 'click', function () {
            map.setZoom(map.getZoom() + 1)
        });
        google.maps.event.addDomListener(controlUIzoomOut, 'click', function () {
            map.setZoom(map.getZoom() - 1)
        });
    }

    var zoomControlDiv = document.createElement('div');
    zoomControlDiv.className = "map-zoom-container";
    var zoomControl = new CustomZoomControl(zoomControlDiv, map);

    //insert the zoom div on the top left of the map
    map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv);

});