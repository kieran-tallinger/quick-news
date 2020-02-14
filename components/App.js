class App {
  constructor(quotes, currnetLocationWeather, greeting, news, stockInfo, clock) {
    this.quotes = quotes;
    this.greeting = greeting;
    this.currnetLocationWeather = currnetLocationWeather;
    this.news = news;
    this.stockInfo = stockInfo;
    this.clock = clock;
  }
  start() {
    this.quotes.getQuotes();
    this.currnetLocationWeather.getLocationWeather();
    this.greeting.loadName();
    this.stockInfo.getStocks()
    this.news.getNews('headlines');
    setInterval(this.clock.getTime, 1000);
  }
}
