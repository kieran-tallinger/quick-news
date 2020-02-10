var mapSpot = document.getElementById('map');
var form = document.getElementById('form');

var currentLocationWeather = new CurrnetLocationWeather();
var quotes = new Quotes();
var newForm = new FormControl(form);
var mapSetup = new MapSetup(mapSpot);
var app = new App(quotes, currentLocationWeather);

app.start();
