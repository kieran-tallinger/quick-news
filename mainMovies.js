const rightHeader = document.querySelector('.stocks')
const dateTime = document.querySelector('.dateTime')

var greeting = new Greeting();
var currnetLocationWeather = new CurrnetLocationWeather();
let stockInfo = new Stocks()
var quotes = new Quotes();
var movies = new Movies()
var clock = new Clock(dateTime);
var appMovies = new AppMovies(quotes, currnetLocationWeather, greeting, stockInfo, movies, clock);

appMovies.start();
