import React, { Component } from 'react'
import NewsItem from './NewsItem';
import AutoPlayForNews from './AutoPlayForNews';
export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      loading: false
    }
  }
  async componentDidMount() {
    let url = "https://newsapi.org/v2/everything?q=world&from=2023-05-14&to=2023-05-14&sortBy=popularity&apiKey=b74ac86b10ed4fc48de6c54c65090449&pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, page: this.state.page, totalResults: parsedData.totalResults });
  }
  previous = async () => {
    if (this.state.page - 1 > 0) {
      let url = `https://newsapi.org/v2/everything?q=world&from=2023-05-14&to=2023-05-14&sortBy=popularity&apiKey=b74ac86b10ed4fc48de6c54c65090449&page=${this.state.page}&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({ articles: parsedData.articles, page: this.state.page - 1 });
    }
  }
  next = async () => {
    if (this.state.page + 1 < Math.ceil(this.state.totalResults / 20)) {
      let url = `https://newsapi.org/v2/everything?q=world&from=2023-05-14&to=2023-05-14&sortBy=popularity&apiKey=b74ac86b10ed4fc48de6c54c65090449&page=${this.state.page}&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({ articles: parsedData.articles, page: this.state.page + 1 });
    }
  }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsTop Headlines</h2>
        <AutoPlayForNews ></AutoPlayForNews>
        <div className="row my-4">
          {
            this.state.articles.map((element) => {
              return <div className="col-md-4" key={element.url ? element.url : "1"}>
                <NewsItem title={element.title ? element.title : "title"} description={element.description ? element.description : "des"} imageUrl={element.urlToImage ? element.urlToImage : ""} fullnews={element.url ? element.url : ""}></NewsItem>
              </div>

            })
          }
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page === 1} type="button" onClick={this.previous} className="btn btn-secondary ">&larr; prev</button>
          <button disabled={this.state.page === Math.ceil(this.state.totalResults / 20)} type="button" onClick={this.next} className="btn btn-secondary"> next &rarr;</button>
        </div>
      </div>
    )
  }
}
