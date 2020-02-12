let map,infoWindow,marker;
let trafficButton = document.getElementById('traffic-button');
let transitButton = document.getElementById('transit-button');
let bikingButton = document.getElementById('biking-button');

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 16
  });
  infoWindow = new google.maps.InfoWindow;

  google.maps.event.addListener(map, 'click', function(event){
    if (marker){
      removeOldMarker()
    }
    placeNewMarker(event.latLng);
  });

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
      setButtonHandlers();
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}

function setButtonHandlers() {
  trafficButton.addEventListener('click', addTrafficLayer);
  transitButton.addEventListener('click', addTransitLayer);
  bikingButton.addEventListener('click', addBikingLayer);
}

function addTrafficLayer(map) {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 16
  });
  infoWindow = new google.maps.InfoWindow;

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
      infoWindow.setContent("hi");
      infoWindow.open(map);
      map.setCenter(pos);
      setButtonHandlers();
    }, function () {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function addTransitLayer(map) {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 16
  });
  infoWindow = new google.maps.InfoWindow;

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
      infoWindow.setContent("hi");
      infoWindow.open(map);
      map.setCenter(pos);
      setButtonHandlers();
    }, function () {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    handleLocationError(false, infoWindow, map.getCenter());
  }

}

function addBikingLayer(map){
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 16
  });
  infoWindow = new google.maps.InfoWindow;

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
      infoWindow.setContent("hi");
      infoWindow.open(map);
      map.setCenter(pos);
      setButtonHandlers();
    }, function () {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    handleLocationError(false, infoWindow, map.getCenter());
  }

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
