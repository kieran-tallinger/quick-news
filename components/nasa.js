class Nasa {
  constructor() {
    this.handleGetNasaSuccess = this.handleGetNasaSuccess.bind(this);
    this.handleGetNasaError = this.handleGetNasaError.bind(this);
  }
  getNasa() {
    $.ajax({
      method: 'GET',
      url: 'https://api.nasa.gov/planetary/apod',
      data: {
        'api_key': 'mRLmEh3p777qYpyPxKlyy3wyNhUKMgEJcwQhRJzP'
      },
      success: this.handleGetNasaSuccess,
      error: this.handleGetNasaError
    })
  }

  handleGetNasaSuccess(data) {
    document.querySelector('.greet').style.cssText = `background-image:url(${data.url});background-size:cover;height:175px;width:500px;border-radius:15px;background-position:center;background-repeat:no-repeat;`;
    let title = document.createElement('p');
    title.classList.add('mt-4', 'pt-4', 'text-white', 'h6');
    title.textContent = `NASA Pic Of The Day: "${data.title}"`;
    $('.greet').append(title);
  }

  handleGetNasaError(error) {
    console.log(error);
  }
}
