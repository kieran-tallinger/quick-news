class MapLayers {
  constructor(map){
    this.trafficButton = document.getElementById('traffic-button');
    this.transitButton = document.getElementById('transit-button');
    this.bikingButton = document.getElementById('biking-button');
    this.trafficLayer = null;
    this.transitLayer = null;
    this.bikingLayer = null;
    this.setButtonHandlers = this.setButtonHandlers.bind(this);
    this.createTrafficLayer = this.createTrafficLayer.bind(this);
    this.createTransitLayer = this.createTransitLayer.bind(this);
    this.createBikingLayer = this.createBikingLayer.bind(this);
    this.map = map;
    this.pos = null;
  }
  createTrafficLayer(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        this.pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        var marker = new google.maps.Marker({ position: pos, map: map })

        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        infoWindow.open(map);
        map.setCenter(pos);
      }, function () {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      handleLocationError(false, infoWindow, map.getCenter());
    }
    this.map = new google.maps.Map(document.getElementById('map'), {
          center: this.pos,
          zoom: 16
        });
    this.trafficLayer = new google.maps.TrafficLayer
    this.trafficLayer.setMap(this.map);
    console.log("hi from traffic")
  }
  createTransitLayer(){
    this.transitLayer = new google.maps.TransitLayer
    this.transitLayer.setMap(this.map);
    console.log("hi from transit")
  }
  createBikingLayer(){
    this.bikingLayer = new google.maps.BicyclingLayer
    this.bikingLayer.setMap(this.map);
    console.log("hi from biking")
  }
  setButtonHandlers(){
    this.trafficButton.addEventListener('click', this.createTrafficLayer);
    this.transitButton.addEventListener('click', this.createTransitLayer);
    this.bikingButton.addEventListener('click', this.createBikingLayer);
  }
}
