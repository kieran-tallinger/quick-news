class App {
  constructor(quotes, currnetLocationWeather, greeting, news, stockInfo, clock, nasa) {
    this.quotes = quotes;
    this.greeting = greeting;
    this.currnetLocationWeather = currnetLocationWeather;
    this.news = news;
    this.stockInfo = stockInfo;
    this.clock = clock;
    this.nasa = nasa;
  }
  start() {
    this.quotes.getQuotes();
    this.currnetLocationWeather.getLocationWeather();
    this.greeting.loadName();
    this.stockInfo.getStocks()
    this.news.getNews('headlines');
    this.nasa.getNasa();
    setInterval(this.clock.getTime, 1000);
  }
}
