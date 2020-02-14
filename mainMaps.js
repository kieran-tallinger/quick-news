const rightHeader = document.querySelector('.stocks')
const dateTime = document.querySelector('.dateTime')

var greeting = new Greeting();
var currnetLocationWeather = new CurrnetLocationWeather();
let stockInfo = new Stocks()
var quotes = new Quotes();
var clock = new Clock(dateTime);
var appMaps = new AppMaps(quotes, currnetLocationWeather, greeting, stockInfo, clock);

appMaps.start();
