class Clock {
  constructor() {
    this.getTime = this.getTime.bind(this)
    this.init = this.init.bind(this)
  }

  getTime() {
    var target = document.querySelector('.m-0')
    var spanTag = document.createElement('span')
    const date = new Date()
    const hr = date.getHours()
    const min = date.getMinutes()
    spanTag.innerHTML = `${hr < 10 ? `0${hr}` : hr}:${min < 10 ? `0${min}` : min}`
    target.append(spanTag)
    return date
  }

  init() {
    setInterval(getTime, 1000)
  }
}
