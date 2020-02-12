class App {
  constructor(quotes, currnetLocationWeather, greeting, news, stockInfo, movie, clock) {
    this.quotes = quotes;
    this.greeting = greeting;
    this.currnetLocationWeather = currnetLocationWeather;
    this.news = news;
    this.stockInfo = stockInfo;
    this.movies = movies;
    this.clock = clock;
  }
  start() {
    this.quotes.getQuotes();
    this.currnetLocationWeather.getLocationWeather();
    this.greeting.loadName();
    this.stockInfo.getStocks()
    this.news.searchNews();
    this.movies.getMovies();
    this.clock.getTime();
  }
}
