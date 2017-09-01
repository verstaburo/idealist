function ZoomControl(controlDiv, map) {

  // Creating divs & styles for custom zoom control
  //controlDiv.style.padding = '5px';

  // Set CSS for the control wrapper
  var controlWrapper = document.createElement('div');
  controlWrapper.classList.add('map-block__zoom')
  controlDiv.appendChild(controlWrapper);

  // Set CSS for the zoomIn
  var zoomInButton = document.createElement('div');
  zoomInButton.classList.add('map-block__plus');
  controlWrapper.appendChild(zoomInButton);

  // Set CSS for the zoomOut
  var zoomOutButton = document.createElement('div');
  zoomOutButton.classList.add('map-block__minus');
  controlWrapper.appendChild(zoomOutButton);

  // Setup the click event listener - zoomIn
  google.maps.event.addDomListener(zoomInButton, 'click', function() {
    map.setZoom(map.getZoom() + 1);
  });

  // Setup the click event listener - zoomOut
  google.maps.event.addDomListener(zoomOutButton, 'click', function() {
    map.setZoom(map.getZoom() - 1);
  });
}

function customControls(controlDiv, map) {
  controlDiv.classList.add('map-controls');

  //location
  var locationButton = document.createElement('div');
  locationButton.classList.add('map-controls__location');
  locationButton.innerHTML = '<svg><use xlink:href="img/icon.svg#icon_location-marker"></svg>';
  controlDiv.appendChild(locationButton);

  //pin
  var pinButton = document.createElement('div');
  pinButton.classList.add('map-controls__pin');
  pinButton.innerHTML = '<svg><use xlink:href="img/icon.svg#icon_pin-marker"></svg>';
  controlDiv.appendChild(pinButton);

  //zoom

  var zoomControl = document.createElement('div');
  zoomControl.classList.add('map-controls__zoom')
  controlDiv.appendChild(zoomControl);

  // Set CSS for the zoomIn
  var zoomInButton = document.createElement('div');
  zoomInButton.classList.add('map-controls__plus');
  zoomInButton.innerHTML = '<svg><use xlink:href="img/icon.svg#icon_plus"></svg>';
  zoomControl.appendChild(zoomInButton);

  // Set CSS for the zoomOut
  var zoomOutButton = document.createElement('div');
  zoomOutButton.classList.add('map-controls__minus');
  zoomOutButton.innerHTML = '<svg><use xlink:href="img/icon.svg#icon_minus"></svg>';
  zoomControl.appendChild(zoomOutButton);

  // Setup the click event listener - zoomIn
  google.maps.event.addDomListener(zoomInButton, 'click', function() {
    map.setZoom(map.getZoom() + 1);
  });

  // Setup the click event listener - zoomOut
  google.maps.event.addDomListener(zoomOutButton, 'click', function() {
    map.setZoom(map.getZoom() - 1);
  });

  //radius

  var radiusControl = document.createElement('div');
  radiusControl.classList.add('map-controls__radius')
  controlDiv.appendChild(radiusControl);

  var barControl = document.createElement('div');
  barControl.classList.add('map-controls__bar')
  radiusControl.appendChild(barControl);

  var toggleControl = document.createElement('div');
  toggleControl.classList.add('map-controls__toggle')
  barControl.appendChild(toggleControl);
}

function initialize() {

  var addClass;

  if($('#googlemap').data('marker')) {
    addClass = $('#googlemap').data('marker')
  } else {
    addClass = ''
  }

	//Координаты маркеров
    var myLatlng1 = new google.maps.LatLng(59.957006, 30.341755);

    //Стили карты
    var styles =
    [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"administrative.country","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.province","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"labels","stylers":[{"visibility":"on"},{"color":"#c6c7cd"}]},{"featureType":"administrative.locality","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#040715"}]},{"featureType":"administrative.neighborhood","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#85868b"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#040715"},{"lightness":"-2"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#040715"},{"lightness":"0"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#5c1abe"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#b9bac2"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#292a31"},{"lightness":"0"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#68696f"}]},{"featureType":"road.arterial","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#292a31"},{"lightness":"0"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#68696f"}]},{"featureType":"road.local","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#1b1c24"},{"lightness":"0"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#68696f"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]}];

    window.basiczoom = 12;

	//Настройки карты
	var mapOptions = {
		zoom: basiczoom,
		center: myLatlng1,
		disableDefaultUI: true,
        scrollwheel: false,
	}

	//карта
  
	var map = new google.maps.Map(document.getElementById('googlemap'), mapOptions);
    map.setOptions({styles: styles});


  var newZoomControlDiv = document.createElement('div');
  var newZoomControl = new ZoomControl(newZoomControlDiv, map);

  newZoomControlDiv.index = 1;
  map.controls[google.maps.ControlPosition.RIGHT_TOP].push(newZoomControlDiv);

	//Кастомные маркеры
	overlay = new CustomMarker(
		myLatlng1,
		map,
		{
			marker_id: 'event1',
      addclass: addClass
		}
	);
}

function init() {

  var addClass;

  if($('#googlemap').data('marker')) {
    addClass = $('#googlemap').data('marker')
  } else {
    addClass = ''
  }

	//Координаты маркеров
    var myLatlng1 = new google.maps.LatLng(40.709474, -73.881836);
    var myLatlng2 = new google.maps.LatLng(40.679830, -73.911762);
    var myLatlng3 = new google.maps.LatLng(40.708790, -73.905892);
    var myLatlng4 = new google.maps.LatLng(40.690199, -73.873408);
    var myLatlng5 = new google.maps.LatLng(40.693963, -73.900259);
    var myLatlng6 = new google.maps.LatLng(40.699371, -73.888324);

    //Стили карты
    var styles =
    [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"administrative.country","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.province","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"labels","stylers":[{"visibility":"on"},{"color":"#c6c7cd"}]},{"featureType":"administrative.locality","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#040715"}]},{"featureType":"administrative.neighborhood","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#85868b"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#040715"},{"lightness":"-2"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#040715"},{"lightness":"0"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#5c1abe"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#b9bac2"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#292a31"},{"lightness":"0"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#68696f"}]},{"featureType":"road.arterial","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#292a31"},{"lightness":"0"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#68696f"}]},{"featureType":"road.local","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#1b1c24"},{"lightness":"0"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#68696f"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]}];

    window.basiczoom = 14;

	//Настройки карты
	var mapOptions = {
		zoom: basiczoom,
		center: myLatlng5,
		disableDefaultUI: true,
        scrollwheel: false,
	}

	//карта
	var map = new google.maps.Map(document.getElementById('googlemap-big'), mapOptions);
    map.setOptions({styles: styles});

  var newControlDiv = document.createElement('div');
  var newControl = new customControls(newControlDiv, map);

  newControlDiv.index = 1;

  if ($(window).width() > 768) {
    map.controls[google.maps.ControlPosition.RIGHT_TOP].push(newControlDiv);
  } else {
    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(newControlDiv);
  }

	//Кастомные маркеры
	overlay = new CustomMarker(
		myLatlng1,
		map,
		{
			marker_id: 'event1',
      addclass: ''
		}
	);

  overlay = new CustomMarker(
		myLatlng2,
		map,
		{
			marker_id: 'event2',
      addclass: 'blue'
		}
	);

  overlay = new CustomMarker(
		myLatlng3,
		map,
		{
			marker_id: 'event3',
      addclass: 'blue'
		}
	);

  overlay = new CustomMarker(
		myLatlng4,
		map,
		{
			marker_id: 'event4',
      addclass: 'blue'
		}
	);


  overlay = new CustomMarker(
		myLatlng5,
		map,
		{
			marker_id: 'event5',
      addclass: 'pink'
		}
	);

  overlay = new CustomMarker(
		myLatlng6,
		map,
		{
			marker_id: 'event6',
      addclass: 'few',
      eventcount: '2'
		}
	);
}

if($('#googlemap-big').length > 0) {
  google.maps.event.addDomListener(window, 'load', init);
  google.maps.event.addDomListener(window, 'resize', init);
} else {
  google.maps.event.addDomListener(window, 'load', initialize);
  google.maps.event.addDomListener(window, 'resize', initialize);
}
