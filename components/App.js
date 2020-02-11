class App {
  constructor(quotes, currnetLocationWeather, greeting, news, stockInfo, map) {
    this.quotes = quotes;
    this.greeting = greeting;
    this.currnetLocationWeather = currnetLocationWeather;
    this.news = news;
    this.stockInfo = stockInfo;
    this.map = map;
  }
  start() {
    this.news.getNews();
    this.quotes.getQuotes();
    this.currnetLocationWeather.getLocationWeather();
    this.greeting.loadName();
    this.stockInfo.getStocks()
    this.map.getLocation();
  }
}
