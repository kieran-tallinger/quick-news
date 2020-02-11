class MapLayers {
  constructor(map){
    var trafficButton = document.getElementById('traffic-button');
    var transitButton = document.getElementById('transit-button');
    var bikingButton = document.getElementById('biking-button');
    this.setButtonHandlers = this.setButtonHandlers.bind(this);
    this.map = map;
  }
  createTrafficLayer(){
    var trafficLayer = new google.maps.TrafficLayer
    trafficButton.setMap(this.map);
  }
  createTransitLayer(){
    var transitLayer = new google.maps.TransitLayer
    trafficButton.setMap(this.map);
  }
  createBikingLayer(){
    var bikingLayer = new google.maps.BicyclingLayer
    trafficButton.setMap(this.map);
  }
  setButtonHandlers(){
    this.trafficButton.addEventListener('click', createTrafficLayer);
    this.transitButton.addEventListener('click', createTransitLayer);
    this.bikingButton.addEventListener('click', createTrafficLayer);
  }
}
