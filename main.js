let rightHeader = document.querySelector('.stocks')
var dateTime = document.querySelector('.dateTime')

var news = new News();
var greeting = new Greeting();
var currnetLocationWeather = new CurrnetLocationWeather();
let stockInfo = new Stocks()
var quotes = new Quotes();
var movies = new Movies()
var clock = new Clock(dateTime);
var app = new App(quotes, currnetLocationWeather, greeting, news, stockInfo, movies, clock);

app.start();
