class MapSetup {
  constructor(mapSpot){
    this.mapSpot = mapSpot;
    this.map = null;
    this.infoWindow = null;
    this.initMap = this.initMap.bind(this);
  }
  initMap(){
    this.map = new google.maps.Map(this.mapSpot, {
      center: { lat: -15.6567, lng: 100.2345 },
      zoom: 16
    });
    this.infoWindow = new google.maps.InfoWindow;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        var marker = new google.maps.Marker({
          position: pos,
          map: map
        })

        this.infoWindow.setPosition(pos);
        this.infoWindow.setContent('Location found.');
        this.infoWindow.open(map);
        this.map.setCenter(pos);
        this.map.data.loadGeoJson('https://storage.googleapis.com/mapsdevsite/json/google.json')
        this.map.data.setStyle({ fillColor: 'green' })

      }, function () {
        this.handleLocationError(true, this.infoWindow, this.map.getCenter());
      });
    } else {
      this.handleLocationError(false, this.infoWindow, this.map.getCenter());
    }
  }
  handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
      'Error: The Geolocation service failed.' :
      'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
  }
}
