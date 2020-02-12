let map,infoWindow,marker, geocoder;
let mapForm = document.getElementById('map-form');
let searchInput = document.getElementById('search');
let mapSpot = document.getElementById('map');
let trafficButton = document.getElementById('traffic-button');
let transitButton = document.getElementById('transit-button');
let bikingButton = document.getElementById('biking-button');

function initMap() {
  map = new google.maps.Map(mapSpot, {
    center: {lat: -34.397, lng: 150.644},
    zoom: 16
  });
  infoWindow = new google.maps.InfoWindow;

  geocoder = new google.maps.Geocoder();

  setMapListeners();

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      marker = new google.maps.Marker({position: pos, map: map})

      infoWindow.setPosition(pos);
      infoWindow.setContent("hi");
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

function addTrafficLayer(map) {
  map = new google.maps.Map(mapSpot, {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 16
  });
  infoWindow = new google.maps.InfoWindow;

  geocoder = new google.maps.Geocoder();

  setMapListeners();

  var trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      var marker = new google.maps.Marker({ position: pos, map: map })

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

function addTransitLayer(map) {
  map = new google.maps.Map(mapSpot, {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 16
  });
  infoWindow = new google.maps.InfoWindow;

  geocoder = new google.maps.Geocoder();

  setMapListeners();

  var transitLayer = new google.maps.TransitLayer();
  transitLayer.setMap(map);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      var marker = new google.maps.Marker({ position: pos, map: map })

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

function addBikingLayer(map){
  map = new google.maps.Map(mapSpot, {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 16
  });
  infoWindow = new google.maps.InfoWindow;

  geocoder = new google.maps.Geocoder();

  setMapListeners();

  var bikingLayer = new google.maps.BicyclingLayer();
  bikingLayer.setMap(map)

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      var marker = new google.maps.Marker({ position: pos, map: map })

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

function makeMapForSearch(searchResult) {
  map = new google.maps.Map(mapSpot, {
    center: { lat: searchResult.lat, lng: searchResult.lng },
    zoom: 16
  });
  infoWindow = new google.maps.InfoWindow;
  marker = new google.maps.Marker({ position: map.center, map: map })
  setMapListeners();
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

function handleFormSearchSubmit(searchInput){
  console.log("hello from form", searchInput);
}

function setMapListeners(){
  google.maps.event.addListener(map, 'click', function (event) {
    if (marker) {
      removeOldMarker()
    }
    placeNewMarker(event.latLng);
  });
}

function setHandlers() {
  trafficButton.addEventListener('click', addTrafficLayer);
  transitButton.addEventListener('click', addTransitLayer);
  bikingButton.addEventListener('click', addBikingLayer);
  handleFormSubmit();
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}

function placeNewMarker(newLocation){
  marker = new google.maps.Marker({
    position: newLocation,
    map: map
  })
}

function removeOldMarker(){
  marker.setMap(null);
}

function findPlace(inputVal) {
  var place = inputVal
  geocoder.geocode( {'address': inputVal}, function(results, status) {
    if (status === 'OK'){
      map.setCenter(results[0].geometry.location);
      placeNewMarker(results[0].geometry.location);
    } else {
      console.log("geocode was unsuccesful because ", status);
    }
  })
}

function handleFindPlaceError (error) {
  console.log(error)
}
