class Map {
  constructor(){
    this.map = null;
    this.pos = null;
    this.getLocation = this.getLocation.bind(this);
    this.assignPosition = this.assignPosition.bind(this);
    this.renderMap = this.renderMap.bind(this);
    this.addMarker = this.addMarker.bind(this);
    this.removeMarker = this.removeMarker.bind(this);
    this.handleGetLocationError = this.handleGetLocationError.bind(this);
  }
  getLocation(){
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.assignPosition)
    }
  }
  assignPosition(geoPosition){
    this.pos = {
      lat: geoPosition.coords.latitude,
      lng: geoPosition.coords.longitude
    }
  }
  renderMap(){

  }
  addMarker(){

  }
  removeMarker(){

  }
  handleGetLocationError(){
    console.error('Error')
  }
}
