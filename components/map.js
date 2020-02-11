class Map {
  constructor(){
    this.map = null;
    this.pos = null;
    this.mapConfig = null;
    this.mapSpot = document.getElementById('map');
    // this.makeMap = this.makeMap.bind(this);
    this.getLocation = this.getLocation.bind(this);
    this.assignPosition = this.assignPosition.bind(this);
    this.renderMap = this.renderMap.bind(this);
    this.addMarker = this.addMarker.bind(this);
    this.removeMarker = this.removeMarker.bind(this);
    this.handleGetLocationError = this.handleGetLocationError.bind(this);
  }
  // makeMap(){
  //   this.getLocation();
  //   this.renderMap();
  // }
  getLocation(){
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.assignPosition,this.handleGetLocationError)
    } else {
      this.handleGetLocationError();
    }
  }
  assignPosition(geoPosition){
    var newPos = {
      lat: geoPosition.coords.latitude,
      lng: geoPosition.coords.longitude
    }
    this.pos = newPos;
    this.renderMap(this.pos);
  }
  renderMap(newMapLoc){
    console.log('renderMap', this.pos)
    this.mapConfig = {
      center: {
        lat: newMapLoc.lat,
        lng: newMapLoc.lng
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
