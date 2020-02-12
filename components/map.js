// class Map {
//   constructor(map,infoWindow){
//     this.map = map;
//     this.infoWindow = infoWindow;
//     this.pos = null;
//     this.marker = null;
//     this.mapConfig = null;
//     this.mapSpot = document.getElementById('map');
//     // this.getLocation = this.getLocation.bind(this);
//     // this.assignPosition = this.assignPosition.bind(this);
//     // this.renderMap = this.renderMap.bind(this);
//     this.addMarker = this.addMarker.bind(this);
//     this.removeMarker = this.removeMarker.bind(this);
//     this.handleGetLocationError = this.handleGetLocationError.bind(this);
//   }
//   makeMap(){
//     this.map = new google.maps.Map(this.mapSpot, {
//       center: { lat: -34.397, lng: 150.644 },
//       zoom: 16
//     });
//     infoWindow = new google.maps.InfoWindow;

//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(function (position) {
//         var pos = {
//           lat: position.coords.latitude,
//           lng: position.coords.longitude
//         };

//         var marker = new google.maps.Marker({ position: pos, map: map })

//         infoWindow.setPosition(pos);
//         infoWindow.setContent('Location found.');
//         infoWindow.open(map);
//         map.setCenter(pos);
//       }, function () {
//         this.handleLocationError(true, infoWindow, map.getCenter());
//       });
//     } else {
//       this.handleLocationError(false, infoWindow, map.getCenter());
//     }
//   }
//   getLocation(){
//     if (navigator.geolocation){
//       navigator.geolocation.getCurrentPosition(this.assignPosition,this.handleGetLocationError)
//     } else {
//       this.handleGetLocationError();
//     }
//   }
//   assignPosition(geoPosition){
//     var newPos = {
//       lat: geoPosition.coords.latitude,
//       lng: geoPosition.coords.longitude
//     }
//     this.pos = newPos;
//     this.renderMap(this.pos);
//     console.log('hi from assign')
//   }
//   renderMap(){
//     this.mapConfig = {
//       center: {
//         lat: newMapLoc.lat,
//         lng: newMapLoc.lng
//       },
//       zoom: 16,
//       // gestureHandling: "none",
//       minZoom: 10,
//       maxZoom: 17,
//       fullscreenControl: true
//     }
//     var newMap = new google.maps.Map(this.mapSpot, this.mapConfig);
//     this.map = newMap;
//     console.log ('hi from renderMap')
//     this.addMarker(this.pos, this.map);
//   }
//   addMarker(newMarkerLoc, map){
//     console.log('add marker', newMarkerLoc, map)
//     var newMarker = new google.maps.Marker(newMarkerLoc, map);
//     this.marker = newMarker;
//   }
//   removeMarker(){
//     console.log('hi')
//   }
//   handleGetLocationError(){
//     console.error('Error')
//   }
// }
