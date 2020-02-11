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
    // this.setMapHandler = this.setMapHandler.bind(this);
    // this.handleDrag = this.handleDrag.bind(this);
    // this.switchToAsyncScript = this.switchToAsyncScript.bind(this);
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
  // setMapHandler(){
  //   this.map.addListener('center_changed', this.handleDrag)
  // }
  // handleDrag(){
  //   window.setTimeout(function() {
  //     this.map.panTo(this.map.center);
  //   }, 3000);
  // }
  // switchToAsyncScript(){
  //   $('#google').remove();
  //   var newGoogleScript = document.createElement('script');
  //   newGoogleScript.setAttribute('async', '');
  //   newGoogleScript.setAttribute('defer', '');
  //   newGoogleScript.setAttribute('id', 'google');
  //   newGoogleScript.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDaOU1SAe_B5ogKnNcBj-EqY_Lq8Y9cvDE&callback=map.renderMap";
  //   document.querySelector('body').appendChild(newGoogleScript);
  // }
}
