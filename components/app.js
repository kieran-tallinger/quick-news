class App {
  constructor(quotes, currnetLocationWeather, greeting) {
    this.quotes = quotes;
    this.greeting = greeting;
    this.currnetLocationWeather = currnetLocationWeather
    this.map = map;
  }

  start() {
    this.quotes.getQuotes();
    this.currnetLocationWeather.getLocationWeather();
    this.greeting.getName();
  }

}
