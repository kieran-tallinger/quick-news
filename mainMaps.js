const rightHeader = document.querySelector('.stocks')
const dateTime = document.querySelector('.dateTime')

let greeting = new Greeting();
let currnetLocationWeather = new CurrnetLocationWeather();
let stockInfo = new Stocks()
let quotes = new Quotes();
let clock = new Clock(dateTime);
let nasa = new Nasa();
let appMaps = new AppMaps(quotes, currnetLocationWeather, greeting, stockInfo, clock, nasa);

appMaps.start();
