var news = new News();
var greeting = new Greeting();
var currnetLocationWeather = new CurrnetLocationWeather();
var quotes = new Quotes();
var app = new App(quotes, currnetLocationWeather, greeting, news);

app.start();
