class AppMovies {
  constructor(quotes, currnetLocationWeather, greeting, stockInfo, movies, clock) {
    this.quotes = quotes;
    this.greeting = greeting;
    this.currnetLocationWeather = currnetLocationWeather;
    this.stockInfo = stockInfo;
    this.movies = movies;
    this.clock = clock;
  }
  start() {
    this.quotes.getQuotes();
    this.currnetLocationWeather.getLocationWeather();
    this.greeting.loadName();
    this.stockInfo.getStocks()
    this.movies.getMovies();
    setInterval(this.clock.getTime, 1000);
  }
}
