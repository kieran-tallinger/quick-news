class News {
  constructor(formElement) {
    this.formElement = formElement;
    this.getNews = this.getNews.bind(this);
    this.handleGetNewsSuccess = this.handleGetNewsSuccess.bind(this);
    this.handleGetNewsError = this.handleGetNewsError.bind(this);
    this.handleSubmitNews = this.handleSubmitNews.bind(this);
    this.formElement.addEventListener('submit', this.handleSubmitNews);
  }
  getNews(input) {
    $.ajax({
      method: 'GET',
      url: 'https://newsapi.org/v2/everything',
      data: {
        'q': `${input}`
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
    news.articles.sort(function (a, b) {
      return ((new Date(b.publishedAt)) - (new Date(a.publishedAt)));
    });
    for (let i = 0; i < news.articles.length; i++) {
      this.createNews(news.articles[i]);
    };
  }

  createNews(newsInfoAtIndex) {
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
    title.textContent = newsInfoAtIndex.title;
    title.classList.add('font-weight-bold');
    source.textContent = `Source: ${newsInfoAtIndex.source.name}`;
    source.classList.add('font-weight-bold');
    author.textContent = `By: ${newsInfoAtIndex.author}`;
    author.classList.add('font-italic');
    let dateString = newsInfoAtIndex.publishedAt;
    let dateSlice = dateString.slice(0, 10).split('-');
    let dateFormatted = `${dateSlice[1]}/${dateSlice[2]}/${dateSlice[0]}`;
    datePublished.textContent = `Published On: ${dateFormatted}`;
    datePublished.classList.add('font-italic');
    description.textContent = newsInfoAtIndex.description;
    description.append(spanURL);
    spanURL.append(url);
    url.setAttribute('href', newsInfoAtIndex.url);
    url.textContent = 'Click Here To Continue Reading';
    image.src = newsInfoAtIndex.urlToImage;
    image.setAttribute('width', '400');
    image.classList.add('img-fluid', 'rounded');
    hr.classList.add('bg-secondary');
    section.append(title, source, author, datePublished, description, image, hr);
    $('#news').append(section);
  }

  handleGetNewsError(error) {
    console.log(error);
  }

  handleSubmitNews(event) {
    event.preventDefault();
    $('#news').text('');
    let formData = new FormData(event.target);
    let query = formData.get('searchNews');
    this.getNews(query);
    event.target.reset();
  }

}
