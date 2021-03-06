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
    var location = `${data.city} ${data.zip}`
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
    var weather = header.querySelector('.weather')
    var temp = Math.round(data.main.temp)
    var max = Math.round(data.main.temp_max)
    var min = Math.round(data.main.temp_min)
    var weatherInfo = `${temp} ℉ `
    weather.textContent = weatherInfo;
    var icon = document.createElement('img')
    icon.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
    icon.setAttribute('value', `${data.weather[0].main}`)
    weather.append(icon)
    var pTag = document.createElement('p')
    pTag.classList.add("m-0")
    var maxSpan = document.createElement('span')
    maxSpan.classList.add("max", "small")
    maxSpan.textContent = `${max}º `
    var minSpan = document.createElement('span')
    minSpan.classList.add("min", "small", "text-muted")
    minSpan.textContent = `/ ${min}º`
    pTag.append(maxSpan)
    pTag.append(minSpan)
    weather.append(pTag)
  }
}
