class Quotes {
  constructor() {
    this.getQuotes = this.getQuotes.bind(this)
    this.handleGetQuoteSuccess = this.handleGetQuoteSuccess.bind(this)
    this.handleGetQuoteError = this.handleGetQuoteError.bind(this)

  }
  getQuotes() {
    $.ajax({
      url: "https://api.quotable.io/random",
      method:"GET",
      success: this.handleGetQuoteSuccess,
      error: this.handleGetQuoteError
    })
  }
  handleGetQuoteError(error) {
    console.log(error)
  }
  handleGetQuoteSuccess(data) {
    var footer = document.querySelector('footer')
    var div = document.createElement('div')
    var quotation = `Today's quotation: ${data.content} -by ${data.author}`
    div.textContent = quotation;
    footer.append(div)
  }
}
