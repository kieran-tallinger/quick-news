class App {
  constructor(quotes, currnetLocationWeather, greeting, news) {
    this.quotes = quotes;
    this.greeting = greeting;
    this.currnetLocationWeather = currnetLocationWeather;
    this.news = news;
  }

  start() {
    this.quotes.getQuotes();
    this.currnetLocationWeather.getLocationWeather();
    this.greeting.getName();
    this.news.start();
  }

}
