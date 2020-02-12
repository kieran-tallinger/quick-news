class Clock {
  constructor(dateTime) {
    this.getTime = this.getTime.bind(this)
    this.dateTime = dateTime;
  }

  getTime() {
    var aDate = this.dateTime.querySelector('.date')
    var time = this.dateTime.querySelector('.time')
    var date = new Date()
    var hr = date.getHours()
    var min = date.getMinutes()
    var day = date.getDate()
    var monthNum = date.getMonth()
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var min = date.getMinutes()
    aDate.textContent = `${month[monthNum]} ${day}`
    time.textContent = `${hr < 10 ? `0${hr}` : hr}:${min < 10 ? `0${min}` : min}`
    return date
  }
}
