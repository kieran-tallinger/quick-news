const rightHeader = document.querySelector('.stocks')
const dateTime = document.querySelector('.dateTime')
const formElement = document.querySelector('#news-form');

var news = new News(formElement);
var greeting = new Greeting();
var currnetLocationWeather = new CurrnetLocationWeather();
let stockInfo = new Stocks()
var quotes = new Quotes();
var clock = new Clock(dateTime);
var app = new App(quotes, currnetLocationWeather, greeting, news, stockInfo, clock);

app.start();
