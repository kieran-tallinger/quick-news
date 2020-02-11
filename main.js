var mapSpot = document.getElementById('map');
var form = document.getElementById('form');


var currentLocationWeather = new CurrnetLocationWeather();
var quotes = new Quotes();
var greeting = new Greeting();
var newForm = new InputForm(form);

var mapSetup = new MapSetup(mapSpot);

var app = new App(quotes, currentLocationWeather,greeting,mapSetup);

app.start();
