class CurrnetLocationWeather {
  constructor() {
    this.getLocationWeather = this.getLocationWeather.bind(this)
    this.handlegetLocationWeatherError = this.handlegetLocationWeatherError.bind(this)
    this.handlegetLocationWeatherSuccess = this.handlegetLocationWeatherSuccess.bind(this)
    this.getWeather = this.getWeather.bind(this)
    this.handlegetWeatherError = this.handlegetWeatherError.bind(this)
    this.handlegetWeatherSuccess = this.handlegetWeatherSuccess.bind(this)
  }
  getLocationWeather() {
    $.ajax({
      url: "http://ip-api.com/json",
      method:"GET",
      success: this.handlegetLocationWeatherSuccess,
      error: this.handlegetLocationWeatherError
    })
  }
  handlegetLocationWeatherError(error) {
    console.log(error)
  }
  handlegetLocationWeatherSuccess(data) {
    var loca = document.querySelector('.location')
    var location = `city: ${data.city} zip: ${data.zip}`
    loca.textContent = location;
    this.lat = data.lat;
    this.lon = data.lon;
    this.getWeather(this.lat, this.lon)
  }
  getWeather(lat, lon) {
    var API_KEYS = "b932cb7ed5dadf023a482aeb62417bf3"
    $.ajax({
      url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEYS}&units=imperial`,
      method:"GET",
      success: this.handlegetWeatherSuccess,
      error: this.handlegetWeatherError
    })
  }
  handlegetWeatherError(error) {
    console.log(error)
  }
  handlegetWeatherSuccess(data) {
    var header = document.querySelector('header')
    var weather = document.querySelector('.weather')
    var weatherInfo = `temp: ${data.main.temp} weather: ${data.weather[0].main}`
    weather.textContent = weatherInfo;
  }
}
