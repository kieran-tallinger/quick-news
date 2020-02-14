const rightHeader = document.querySelector('.stocks')
const dateTime = document.querySelector('.dateTime')
const formElement = document.querySelector('#news-form');

let news = new News(formElement);
let greeting = new Greeting();
let currnetLocationWeather = new CurrnetLocationWeather();
let stockInfo = new Stocks();
let quotes = new Quotes();
let clock = new Clock(dateTime);
let nasa = new Nasa();
let app = new App(quotes, currnetLocationWeather, greeting, news, stockInfo, clock, nasa);

app.start();
