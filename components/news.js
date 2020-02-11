class News {
  constructor() {
    this.getNews = this.getNews.bind(this);
    this.handleGetNewsSuccess = this.handleGetNewsSuccess.bind(this);
    this.handleGetNewsError = this.handleGetNewsError.bind(this);
  }
  getNews() {
    $.ajax({
      method: 'GET',
      url: 'https://newsapi.org/v2/everything',
      data: {
        'q': 'Headlines',
      },
      dataType: 'json',
      headers: {
        'X-Api-Key': '9b42d4b9c71d43ae81704e5ca321f04d'
      },
      success: this.handleGetNewsSuccess,
      error: this.handleGetNewsError
    })
  }

  handleGetNewsSuccess(news) {
    for (let i = 0; i < news.articles.length; i++) {
      let section = document.createElement('section');
      let title = document.createElement('h4');
      let source = document.createElement('h6');
      let author = document.createElement('p');
      let datePublished = document.createElement('p');
      let description = document.createElement('p');
      let spanURL = document.createElement('span');
      let url = document.createElement('a');
      let image = document.createElement('img');
      let hr = document.createElement('hr');
      title.textContent = news.articles[i].title;
      title.classList.add('font-weight-bold');
      source.textContent = `Source: ${news.articles[i].source.name}`;
      source.classList.add('font-weight-bold');
      author.textContent = `By: ${news.articles[i].author}`;
      author.classList.add('font-italic');
      let dateString = news.articles[i].publishedAt;
      let dateSlice = dateString.slice(0, 10);
      let dateSplit = dateSlice.split('-');
      let dateFormatted = dateSplit[1] + '/' + dateSplit[2] + '/' + dateSplit[0];
      datePublished.textContent = `Published On: ${dateFormatted}`;
      datePublished.classList.add('font-italic');
      description.textContent = news.articles[i].description;
      description.append(spanURL);
      spanURL.append(url);
      url.setAttribute('href', news.articles[i].url);
      url.textContent = 'Click Here To Continue Reading';
      image.src = news.articles[i].urlToImage;
      image.setAttribute('width', '400');
      image.classList.add('img-fluid', 'rounded');
      section.append(title, source, author, datePublished, description, image, hr);
      $('#news').append(section);
    }
  }

  handleGetNewsError(error) {
    console.log(error);
  }

  start() {
    this.getNews();
  }
}