class News {
  constructor() {
    this.getNews = this.getNews.bind(this);
    this.handleGetNewsSuccess = this.handleGetNewsSuccess.bind(this);
    this.handleGetNewsError = this.handleGetNewsError.bind(this);
    this.searchNews = this.searchNews.bind(this)
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
    let publishedArray = []
    for(let index = 0; index < news.articles.length; index++) {
      publishedArray.push(news.articles[index].publishedAt)
      publishedArray.sort()
    }
    for(let paIndex = publishedArray.length - 1; paIndex >= 0; paIndex--) {
      for(let index = 0; index < news.articles.length; index++) {
        switch(news.articles[index].publishedAt) {
          case publishedArray[paIndex]:
            this.createNews(news.articles[index])
            break;
        }
      }
    }
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

  searchNews() {
    let searchBar = document.querySelector('.searchBar')
    searchBar.addEventListener('keyup', (event) => {
      let input = searchBar.value
      if(event.keyCode === 13) {
        $('section').remove()
        this.getNews(input)
        searchBar.value = ''
      }
    })
  }
}
