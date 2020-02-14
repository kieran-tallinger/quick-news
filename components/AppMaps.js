class AppMaps {
  constructor(quotes, currnetLocationWeather, greeting, stockInfo, clock) {
    this.quotes = quotes;
    this.greeting = greeting;
    this.currnetLocationWeather = currnetLocationWeather;
    this.stockInfo = stockInfo;
    this.clock = clock;
  }
  start() {
    this.quotes.getQuotes();
    this.currnetLocationWeather.getLocationWeather();
    this.greeting.loadName();
    this.stockInfo.getStocks()
    setInterval(this.clock.getTime, 1000);
  }
}
