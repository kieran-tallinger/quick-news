class AppMovies {
  constructor(quotes, currnetLocationWeather, greeting, stockInfo, movies, clock, nasa) {
    this.quotes = quotes;
    this.greeting = greeting;
    this.currnetLocationWeather = currnetLocationWeather;
    this.stockInfo = stockInfo;
    this.movies = movies;
    this.clock = clock;
    this.nasa = nasa;
  }
  start() {
    this.quotes.getQuotes();
    this.currnetLocationWeather.getLocationWeather();
    this.greeting.loadName();
    this.stockInfo.getStocks();
    this.movies.getMovies();
    this.nasa.getNasa();
    setInterval(this.clock.getTime, 1000);
  }
}
