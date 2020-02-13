class Greeting {
  constructor() {
    this.askName = this.askName.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.loadName = this.loadName.bind(this)
    this.paintName = this.paintName.bind(this)
  }

  askName() {
    var form = document.querySelector('.greeting #greeting-form')
    form.addEventListener('submit', this.handleSubmit)
  }

  handleSubmit(e) {
  var input = document.querySelector('.greeting input')
  e.preventDefault()
  var name =input.value
  this.paintName(name)
  input.value = ``
  }

  paintName(text) {
    var input = document.querySelector('.greeting input')
    input.classList.add("d-none")
    var greet = document.querySelector('.greet')
    greet.classList.remove("d-none")
    const date = new Date()
    const hr = date.getHours()
    if (hr >= 17) {
      greet.innerHTML = `Good Evening, ${text}!`
    } else if (hr >= 12) {
      greet.innerHTML = `Good Afternoon, ${text}!`
    } else {
      greet.innerHTML = `Good Morning, ${text}!`
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
