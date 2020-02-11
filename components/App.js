class App {
  constructor(quotes, currnetLocationWeather, greeting, stockInfo) {
    this.quotes = quotes;
    this.currnetLocationWeather = currnetLocationWeather
    this.greeting = greeting;
    this.stockInfo = stockInfo
  }

  start() {
    this.quotes.getQuotes()
    this.currnetLocationWeather.getLocationWeather()
    this.greeting.getName()
    this.stockInfo.getStocks()
  }

}
