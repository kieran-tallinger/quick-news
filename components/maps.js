let map,infoWindow,marker1,marker2, geocoder, directionsService, directionsRenderer;
let searchInput = document.getElementById('search');
let mapForm = document.getElementById('map-form');
let mapSpot = document.getElementById('map');
let routeButton = document.getElementById('route-button');
let trafficButton = document.getElementById('traffic-button');
let transitButton = document.getElementById('transit-button');
let bikingButton = document.getElementById('biking-button');

// primary callback function used in the google api script tag
function initMap() {
  map = new google.maps.Map(mapSpot, {
    center: {lat: -34.397, lng: 150.644},
    zoom: 16
  });
  infoWindow = new google.maps.InfoWindow;
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  geocoder = new google.maps.Geocoder();

  setMapListeners();
  directionsRenderer.setMap(map);
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      marker1 = new google.maps.Marker({position: pos, map: map});
      marker1.metadata = {type: 'point',id: 1};
      infoWindow.setPosition(pos);
      infoWindow.setContent("You're Here!");
      infoWindow.open(map);
      map.setCenter(pos);
      setHandlers();
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

// modified initMap function to be used as callback upon Traffic Button click event
function addTrafficLayer(map) {
  map = new google.maps.Map(mapSpot, {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 16
  });
  infoWindow = new google.maps.InfoWindow;
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  geocoder = new google.maps.Geocoder();

  setMapListeners();
  directionsRenderer.setMap(map);
  var trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      marker1 = new google.maps.Marker({ position: pos, map: map });
      marker1.metadata = { type: 'point', id: 1 };
      infoWindow.setPosition(pos);
      infoWindow.setContent("traffic");
      infoWindow.open(map);
      map.setCenter(pos);
      setHandlers();
    }, function () {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

// modified initMap function to be used as callback upon Mass Transit Button click event
function addTransitLayer(map) {
  map = new google.maps.Map(mapSpot, {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 16
  });
  infoWindow = new google.maps.InfoWindow;
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  geocoder = new google.maps.Geocoder();

  setMapListeners();
  directionsRenderer.setMap(map);
  var transitLayer = new google.maps.TransitLayer();
  transitLayer.setMap(map);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      marker1 = new google.maps.Marker({ position: pos, map: map });
      marker1.metadata = { type: 'point', id: 1 };
      infoWindow.setPosition(pos);
      infoWindow.setContent("transit");
      infoWindow.open(map);
      map.setCenter(pos);
      setHandlers();
    }, function () {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

// modified initMap function to be used as callback upon Biking Button click event
function addBikingLayer(map){
  map = new google.maps.Map(mapSpot, {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 16
  });
  infoWindow = new google.maps.InfoWindow;
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  geocoder = new google.maps.Geocoder();

  setMapListeners();
  directionsRenderer.setMap(map);
  var bikingLayer = new google.maps.BicyclingLayer();
  bikingLayer.setMap(map)

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      marker1 = new google.maps.Marker({ position: pos, map: map });
      marker1.metadata = { type: 'point', id: 1 };
      infoWindow.setPosition(pos);
      infoWindow.setContent("biking");
      infoWindow.open(map);
      map.setCenter(pos);
      setHandlers();
    }, function () {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    handleLocationError(false, infoWindow, map.getCenter());
  }

}

// function used to place the event listener responsible for handling the enter key keyup event
//   on the Search Area Input
function handleFormSubmit() {
  searchInput.addEventListener('keyup', (event) => {
    let input = searchInput.value;
    if(event.keyCode === 13) {
      findPlace(input);
      searchInput.value = ''
    }
  })
}

// function used to place the event listener responsible for handling the click event on the map
function setMapListeners(){
  google.maps.event.addListener(map, 'click', function (event) {
    if (marker1) {
      removeOldMarker()
    }
    placeNewMarker(event.latLng);
    marker1.metadata = { type: 'point', id: 1 };
  });
}

// function used to place the event listeners for the click events and their respective callbacks on
//    the the three map layer buttons && calls the function handleFormSubmit
function setHandlers() {
  trafficButton.addEventListener('click', addTrafficLayer);
  transitButton.addEventListener('click', addTransitLayer);
  bikingButton.addEventListener('click', addBikingLayer);
  routeButton.addEventListener('click', findRoute);
  mapForm.addEventListener('submit', function(e){
    e.preventDefault();
  })
  handleFormSubmit();
}

// function used as a callback in the various map creation fucntions to handle geolocation errors
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}

// function used as a callback in reaction to a click event on the map to place a new marker object
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
// function used as a callback in reaction to a click event if there is a pre-existing marker object
//   to remove the old marker object
function removeOldMarker(){
  marker1.setMap(null);
}

// function used as a callback in reaction to a keyup event if the key is 'enter' to change the value of
//    the map center property to the new search inputs location || log the status failure causing a failed
//    submit event
function findPlace(inputVal) {
  var place = inputVal
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
  var start = marker1.getPosition();
  var end = marker2.getPosition();
  var request = {
    origin: start,
    destination: end,
    travelMode: 'DRIVING'
  };
  directionsService.route(request, function(results, status){
    if (status === 'OK') {
      directionsRenderer.setDirections(results);
    };
  });
}
