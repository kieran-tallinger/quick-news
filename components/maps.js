let map,infoWindow,marker1,marker2, geocoder, directionsService, directionsRenderer;
const searchInput = document.getElementById('search');
const mapForm = document.getElementById('map-form');
const mapSpot = document.getElementById('map');
const routeButton = document.getElementById('route-button');
const trafficButton = document.getElementById('traffic-button');
const transitButton = document.getElementById('transit-button');
const bikingButton = document.getElementById('biking-button');

function initMap() {
  map = new google.maps.Map(mapSpot, {
    center: {lat: -34.397, lng: 150.644},
    zoom: 16
  });
  infoWindow = new google.maps.InfoWindow;
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  geocoder = new google.maps.Geocoder();

  directionsRenderer.setMap(map);
  if (!navigator.geolocation) {
      handleLocationError(false, infoWindow, map.getCenter());
  }
  navigator.geolocation.getCurrentPosition(function(position) {
    let pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };

    marker1 = new google.maps.Marker({position: pos, map: map});
    infoWindow.setPosition(pos);
    infoWindow.setContent("You're Here!");
    infoWindow.open(map);
    map.setCenter(pos);
    setHandlers();
  }, function() {
    handleLocationError(true, infoWindow, map.getCenter());
  });
}

function addTrafficLayer(map) {
  map = new google.maps.Map(mapSpot, {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 16
  });
  infoWindow = new google.maps.InfoWindow;
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  geocoder = new google.maps.Geocoder();

  directionsRenderer.setMap(map);
  const trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);

  if (!navigator.geolocation) {
    handleLocationError(false, infoWindow, map.getCenter());
  }
  navigator.geolocation.getCurrentPosition(function (position) {
    let pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };

    marker1 = new google.maps.Marker({ position: pos, map: map });
    infoWindow.setPosition(pos);
    infoWindow.setContent("You're Here!");
    infoWindow.open(map);
    map.setCenter(pos);
    setHandlers();
  }, function () {
    handleLocationError(true, infoWindow, map.getCenter());
  });
}

function addTransitLayer(map) {
  map = new google.maps.Map(mapSpot, {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 16
  });
  infoWindow = new google.maps.InfoWindow;
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  geocoder = new google.maps.Geocoder();

  directionsRenderer.setMap(map);
  const transitLayer = new google.maps.TransitLayer();
  transitLayer.setMap(map);

  if (!navigator.geolocation) {
    handleLocationError(false, infoWindow, map.getCenter());
  }
  navigator.geolocation.getCurrentPosition(function (position) {
    let pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };

    marker1 = new google.maps.Marker({ position: pos, map: map });
    infoWindow.setPosition(pos);
    infoWindow.setContent("You're Here!");
    infoWindow.open(map);
    map.setCenter(pos);
    setHandlers();
  }, function () {
    handleLocationError(true, infoWindow, map.getCenter());
  });
}

function addBikingLayer(map){
  map = new google.maps.Map(mapSpot, {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 16
  });
  infoWindow = new google.maps.InfoWindow;
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  geocoder = new google.maps.Geocoder();

  directionsRenderer.setMap(map);
  const bikingLayer = new google.maps.BicyclingLayer();
  bikingLayer.setMap(map)

  if (!navigator.geolocation) {
    handleLocationError(false, infoWindow, map.getCenter());
  }
  navigator.geolocation.getCurrentPosition(function (position) {
    let pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };

    marker1 = new google.maps.Marker({ position: pos, map: map });
    infoWindow.setPosition(pos);
    infoWindow.setContent("You're Here!");
    infoWindow.open(map);
    map.setCenter(pos);
    setHandlers();
  }, function () {
    handleLocationError(true, infoWindow, map.getCenter());
  });
}

function handleFormSubmit() {
  searchInput.addEventListener('keyup', (event) => {
    let input = searchInput.value;
    if(event.keyCode === 13) {
      findPlace(input);
      searchInput.value = ''
    }
  })
}

function setMapListeners(){
  google.maps.event.addListener(map, 'click', function (event) {
    if (marker1) {
      removeOldMarker()
    }
    placeNewMarker(event.latLng);
    marker1.metadata = { type: 'point', id: 1 };
  });
}

function setHandlers() {
  trafficButton.addEventListener('click', addTrafficLayer);
  transitButton.addEventListener('click', addTransitLayer);
  bikingButton.addEventListener('click', addBikingLayer);
  routeButton.addEventListener('click', findRoute);
  mapForm.addEventListener('submit', function(e){
    e.preventDefault();
  })
  handleFormSubmit();
  setMapListeners();
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}

function placeNewMarker(newLocation){
  marker1 = new google.maps.Marker({
    position: newLocation,
    map: map
  })
}

function placeSearchMarker(newLocation) {
  marker2 = new google.maps.Marker({
    position: newLocation,
    map: map
  })
}

function removeOldMarker(){
  marker1.setMap(null);
}

function findPlace(inputVal) {
  let place = inputVal
  geocoder.geocode( {'address': inputVal}, function(results, status) {
    if (status === 'OK'){
      if (marker2){
        marker2.setMap(null);
      }
      map.setCenter(results[0].geometry.location);
      placeSearchMarker(results[0].geometry.location);
      marker2.metadata = {type: 'point', id: 2};
    } else {
      console.log("geocode was unsuccesful because ", status);
    }
  })
}

function findRoute() {
  let start = marker1.getPosition();
  let end = marker2.getPosition();
  let request = {
    origin: start,
    destination: end,
    travelMode: 'DRIVING'
  };
  directionsService.route(request, function(results, status){
    if (status === 'OK') {
      directionsRenderer.setDirections(results);
    }
  });
}
