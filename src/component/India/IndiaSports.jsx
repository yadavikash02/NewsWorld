import React, { Component } from 'react'
import NewsItem from '../NewsItem';
import AutoplayNews from '../AutoplayNews';
export default class Indianews extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      loading: false
    }
  }
  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=e44559be7e2b4db595882caa9bc0fde8&pageSize=20";
    let data = await fetch(url);
    let parsedData =await data.json();
    this.setState({ articles: parsedData.articles,page: this.state.page,totalResults:parsedData.totalResults });
  }
      previous =async()=>{
        if(this.state.page-1>0){
          let url = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=e44559be7e2b4db595882caa9bc0fde8&page=${this.state.page}&pageSize=20`;
          let data = await fetch(url);
          let parsedData =await data.json();
          this.setState({ articles: parsedData.articles,page: this.state.page-1});
        }
      }
      next =async()=>{
        if(this.state.page+1<Math.ceil(this.state.totalResults/20)){
          let url = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=e44559be7e2b4db595882caa9bc0fde8&page=${this.state.page}&pageSize=20`;
          let data = await fetch(url);
          let parsedData =await data.json();
          this.setState({ articles: parsedData.articles,page: this.state.page+1 });
        }
      }
      render() {
        return (
          <div className="container my-3">
            <h3>India-Sports Headlines</h3>
            <AutoplayNews country="in" category="sports"></AutoplayNews>
            {/* <img className= "w-75 h-50" src="https://media.cnn.com/api/v1/images/stellar/prod/230406144257-04-jamie-dimon-poppy-harlow-cnn-interview-0406.jpg?c=16x9&q=w_800,c_fill" alt="" /> */}
            <div className="row my-4">
              {
                this.state.articles.map((element) => {
                    return <div className="col-md-4" key={element.url ? element.url : "1"}>
                    <NewsItem title={element.title? element.title : "title"} description={element.description? element.description : "des"} imageUrl={element.urlToImage? element.urlToImage : "" }fullnews={element.url? element.url : ""}></NewsItem>
                  </div>
                  
                })
              }
            </div>
            <div className="container d-flex justify-content-between">
            <button disabled={this.state.page===1} type="button" onClick={this.previous} className="btn btn-secondary ">&larr; prev</button>
            <button disabled={this.state.page===Math.floor(this.state.totalResults/20)} type="button" onClick={this.next} className="btn btn-secondary "> next &rarr;</button>
          </div>
          </div>
        )
      }
}
