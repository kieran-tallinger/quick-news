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
    console.log(data)
    var weather = document.querySelector('.weather')
    var weatherInfo = weather.querySelector('img').getAttribute('value')
    var arr =  data.data.movies
    var randomNum = Math.floor(Math.random() * arr.length-1)
    var weatherArr = ['clear', 'clouds', 'rain', 'snow', 'haze', 'mist', 'drizzle']
    var wea = weatherInfo.toLowerCase()
    if(weatherArr.includes(wea)) {
      var newArr = []
      for (let i = 0; i < arr.length; i++) {
        var genres = arr[i].genres
        if (wea === "clear") {
          if (genres.includes("Family") || genres.includes("Romance") || genres.includes("Music") || genres.includes("Musical")) {
            newArr.push(arr[i])
          }
        }
        if (wea === "clouds" || wea === "rain" || wea === "drizzle") {
          if (genres.includes("Action") || genres.includes("Adventure") || genres.includes("Sci-fi") || genres.includes("Western")) {
            newArr.push(arr[i])
          }
        }
        if (wea === "haze" || wea === "mist" || wea === "snow") {
          if (genres.includes("Thriller") || genres.includes("Mystery")) {
            newArr.push(arr[i])
          }
        }
      }
      var ranNum = Math.floor(Math.random() * newArr.length-1)
      this.recommendMovie(newArr[ranNum])
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
