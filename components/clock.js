class Clock {
  constructor(dateTime) {
    this.getTime = this.getTime.bind(this)
    this.dateTime = dateTime;
  }

  getTime() {
    var aDate = this.dateTime.querySelector('.date')
    var time = this.dateTime.querySelector('.time')
    var date = new Date()
    var hr = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    var amPM = date.getHours() >= 12 ? 'PM' : 'AM';
    var min = date.getMinutes()
    var day = date.getDate()
    var monthNum = date.getMonth()
    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    var min = date.getMinutes()
    aDate.textContent = `${month[monthNum]} ${day}`
    time.textContent = `${hr}:${min < 10 ? `0${min}` : min} ${amPM}`
    return date
  }
}
