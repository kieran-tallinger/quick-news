class App {
  constructor(quotes, currnetLocationWeather, greeting, news, stockInfo) {
    this.quotes = quotes;
    this.greeting = greeting;
    this.currnetLocationWeather = currnetLocationWeather;
    this.news = news;
    this.stockInfo = stockInfo
  }

  start() {
    this.quotes.getQuotes();
    this.currnetLocationWeather.getLocationWeather();
    this.greeting.loadName();
    this.news.getNews();
    this.stockInfo.getStocks()
  }

}
