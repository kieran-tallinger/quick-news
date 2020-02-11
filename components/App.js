class App {
  constructor(quotes, currnetLocationWeather, greeting) {
    this.quotes = quotes;
    this.greeting = greeting;
    this.currnetLocationWeather = currnetLocationWeather
  }

  start() {
    this.quotes.getQuotes()
    this.currnetLocationWeather.getLocationWeather()
    this.greeting.loadName()
  }

}
