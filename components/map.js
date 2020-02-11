class MapSetup {
  constructor(mapSpot){
    this.mapSpot = mapSpot;
    this.searchForPosition = this.searchForPosition.bind(this);
    this.setPosition = this.setPosition.bind(this);
    this.setPositionError = this.setPositionError.bind(this);
    this.makeMap = this.makeMap.bind(this);
    this.map = null;
  }
  makeMap(){
    this.map = new google.map.Map(this.mapSpot, this.searchForPosition)
  }
  searchForPosition(){
    var pos = null;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setPosition, this.setPositionError);
    } else {
      this.handleLocationError(false, this.infoWindow, this.map.getCenter());
    }
    return pos
  }
  setPosition(position){
    var pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };

    var marker = new google.maps.Marker({
      position: pos,
      map: map
    })
  }
  setPositionError(position){
    this.handleLocationError(true, this.infoWindow, this.map.getCenter());
  }
  handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
      'Error: The Geolocation service failed.' :
      'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
  }
}
