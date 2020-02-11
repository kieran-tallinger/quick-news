// var map, infoWindow;
let rightHeader = document.querySelector('.stocks')

var news = new News();
var greeting = new Greeting();
var currnetLocationWeather = new CurrnetLocationWeather();
let stockInfo = new Stocks()
var quotes = new Quotes();
var map = new Map();
// var mapLayers = new MapLayers(map);
var app = new App(quotes, currnetLocationWeather, greeting, news, stockInfo, map);

// mapLayers.setButtonHandlers();
app.start();
