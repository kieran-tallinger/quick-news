class Map {
  constructor(){
    this.map = null;
    this.pos = null;
    this.marker = null;
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
    var newPos = {
      lat: geoPosition.coords.latitude,
      lng: geoPosition.coords.longitude
    }
    this.pos = newPos;
    this.renderMap(this.pos);
    console.log('hi from assign')
  }
  renderMap(newMapLoc){
    this.mapConfig = {
      center: {
        lat: newMapLoc.lat,
        lng: newMapLoc.lng
      },
      zoom: 16,
      gestureHandling: "none",
      minZoom: 10,
      maxZoom: 17,
      fullscreenControl: true
    }


    var newMap = new google.maps.Map(this.mapSpot, this.mapConfig);
    this.map = newMap;
    console.log ('hi from renderMap')
    this.addMarker(this.pos, this.map);
    // this.setMapHandler();
    // this.switchToAsyncScript();
  }
  addMarker(newMarkerLoc, map){
    console.log('add marker', newMarkerLoc, map)
    var newMarker = new google.maps.Marker(newMarkerLoc, map);
    this.marker = newMarker;
  }
  removeMarker(){
    console.log('hi')
  }
  handleGetLocationError(){
    console.error('Error')
  }
}
