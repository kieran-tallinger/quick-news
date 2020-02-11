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
  }
  createTrafficLayer(){
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
