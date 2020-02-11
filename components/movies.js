class Movies {
  constructor() {
    this.getMovies = this.getMovies.bind(this);
    this.handleGetMoviesSuccess = this.handleGetMoviesSuccess.bind(this);
    this.handleGetMoviesError = this.handleGetMoviesError.bind(this);
    this.recommendMovie = this.recommendMovie.bind(this)
  }
  getMovies() {
    $.ajax({
      method: 'GET',
      url: 'https://yts.mx/api/v2/list_movies.json?sort_by=rating',
      success: this.handleGetMoviesSuccess,
      failure: this.handleGetMoviesError
    })
  }
  handleGetMoviesError(error) {
    console.log(error);
  }
  recommendMovie(obj) {
    console.log('hi')
    var poster = document.querySelector('.Poster')
    var posterImg = document.createElement('img')
    posterImg.setAttribute('src', `${obj.medium_cover_image}`)
    poster.append(posterImg)
    var desc = document.querySelector('.desc')
    var movieTitle = desc.querySelector('.movieTitle')
    var year = desc.querySelector('.year')
    var rating = desc.querySelector('.rating')
    var runtime = desc.querySelector('.runtime')
    var summary = desc.querySelector('.summary')
    movieTitle.textContent = `Title: ${obj.title}`
    year.textContent = `Year: ${obj.year}`
    rating.textContent = `Rating: ${obj.rating}`
    runtime.textContent = `Runtime: ${obj.runtime}`
    summary.textContent = `Summary: ${obj.summary}`
  }
  handleGetMoviesSuccess(data) {
    var weather = document.querySelector('.weather')
    var weatherInfo = weather.querySelector('img').getAttribute('value')
    var arr =  data.data.movies
    var randomNum = Math.floor(Math.random() * arr.length-1)
    var weatherArr = ['clear', 'clouds', 'rain', 'snow', 'haze', 'mist', 'drizzle']
    if(weatherArr.includes(weatherInfo.toLowerCase())) {
      for (let i = 0; i < arr.length; i++) {
        var genres = arr[i].genres
        if (weatherInfo.toLowerCase() === "clear") {
          if (genres.includes("Romance")) {
            this.recommendMovie(arr[i])
            break;
          }
        }
        if (weatherInfo.toLowerCase() === "clouds" || weatherInfo.toLowerCase() === "rain" || weatherInfo.toLowerCase() === "snow") {
          if (genres.includes("Thriller")) {
            this.recommendMovie(arr[i])
            break;
          }
        }
        if (weatherInfo.toLowerCase() === "haze" || weatherInfo.toLowerCase() === "mist" || weatherInfo.toLowerCase() === "drizzle") {
          if (genres.includes("Action") && genres.includes("adventure")) {
            this.recommendMovie(arr[i])
            break;
          }
        }
      }
    } else {
      this.recommendMovie(arr[randomNum])
    }
  }
}

/*
clear-drama
Smoke-thriller
Dust-
Fog
Sand
Ash
Squall
Tornado
snow
thunderstorm
*/
/*
family,
adventure,
biography,
history,
adventure,
fantasy,
war,
romance,
mystery,
sci-fi,
music,
musical,
western
*/
