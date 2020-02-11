class Map {
  constructor(){
    this.map = null;
    this.pos = null;
    this.mapConfig = null;
    this.mapSpot = document.getElementById('map');
    this.getLocation = this.getLocation.bind(this);
    this.assignPosition = this.assignPosition.bind(this);
    this.renderMap = this.renderMap.bind(this);
    this.addMarker = this.addMarker.bind(this);
    this.removeMarker = this.removeMarker.bind(this);
    this.handleGetLocationError = this.handleGetLocationError.bind(this);
  }
  getLocation(){
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.assignPosition,this.handleGetLocationError)
    } else {
      this.handleGetLocationError();
    }
  }
  assignPosition(geoPosition){
    this.pos = {
      lat: geoPosition.coords.latitude,
      lng: geoPosition.coords.longitude
    }
  }
  renderMap(){
    this.mapConfig = {
      center: {
        lat: this.pos.lat,
        lng: this.pos.lng
      },
      zoom: 16
    }
    var newMap = new google.maps.Map(this.mapSpot, this.mapConfig);
    this.map = newMap;
  }
  addMarker(){
    console.log("hi")
  }
  removeMarker(){
    console.log('hi')
  }
  handleGetLocationError(){
    console.error('Error')
  }
}
