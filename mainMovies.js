const rightHeader = document.querySelector('.stocks')
const dateTime = document.querySelector('.dateTime')

let greeting = new Greeting();
let currnetLocationWeather = new CurrnetLocationWeather();
let stockInfo = new Stocks()
let quotes = new Quotes();
let movies = new Movies()
let clock = new Clock(dateTime);
let nasa = new Nasa();
let appMovies = new AppMovies(quotes, currnetLocationWeather, greeting, stockInfo, movies, clock, nasa);

appMovies.start();
