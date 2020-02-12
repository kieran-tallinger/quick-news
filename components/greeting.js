class Greeting {
  constructor() {
    this.askName = this.askName.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.loadName = this.loadName.bind(this)
    this.paintName = this.paintName.bind(this)
  }

  askName() {
    var greetingEle = document.querySelector('.greeting')
    var form = greetingEle.querySelector('#greeting-form')
    form.addEventListener('submit', this.handleSubmit)
  }

  handleSubmit(e) {
  var greetingEle = document.querySelector('.greeting')
  var input = greetingEle.querySelector('input')
  e.preventDefault()
  var name =input.value
  this.paintName(name)
  input.value = ``
  }

  paintName(text) {
    var greetingEle = document.querySelector('.greeting')
    var input = greetingEle.querySelector('input')
    input.classList.add("d-none")
    var greet = document.querySelector('.greet')
    greet.classList.remove("d-none")
    const date = new Date()
    const hr = date.getHours()
    if (hr >= 17) {
      greet.innerHTML = `Good evening, ${text}!`
    } else if (hr >= 12) {
      greet.innerHTML = `Good afternoon, ${text}!`
    } else {
      greet.innerHTML = `Good morning, ${text}!`
    }
    localStorage.setItem("name", text)
  }

  loadName() {
    const currentUser = localStorage.getItem("name")
    if (currentUser === null) {
      this.askName()
    } else {
      this.paintName(currentUser)
    }
  }
}
