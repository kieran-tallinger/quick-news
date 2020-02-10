class App {
  constructor(quotes, currnetLocationWeather) {
    this.quotes = quotes;
    this.currnetLocationWeather = currnetLocationWeather
  }

  start() {
    this.quotes.getQuotes()
    this.currnetLocationWeather.getLocationWeather()

  }

}
