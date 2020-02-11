class App {
  constructor(quotes, currnetLocationWeather, greeting, news, stockInfo, movie, map) {
    this.quotes = quotes;
    this.greeting = greeting;
    this.currnetLocationWeather = currnetLocationWeather;
    this.news = news;
    this.stockInfo = stockInfo;
    this.map = map;
    this.movies = movies;
  }
  start() {
    this.quotes.getQuotes();
    this.currnetLocationWeather.getLocationWeather();
    this.greeting.loadName();
    this.stockInfo.getStocks()
    this.news.searchNews();
    this.movies.getMovies();
  }
}
