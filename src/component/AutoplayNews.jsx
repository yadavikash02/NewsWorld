import React, { Component } from 'react'
import { Carousel } from "react-bootstrap";
export default class AutoplayNews extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false
    }
  }
  async componentDidMount() {
    let {country,category}=this.props;
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=e44559be7e2b4db595882caa9bc0fde8&page=2&pageSize=10`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
   
  }
  render() {
    // let {country,category}=this.props;
    return (
      <Carousel fade  >

        {this.state.articles.map((item) => (

          item.urlToImage && <Carousel.Item key={item.url?item.url:"1"} id="banner" interval={1500} keyboard={true}>
            <img
              className="d-block w-100 "
              id="bannerImage"
              src={item.urlToImage}
              alt={`${item.title} banner`}
            />
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {/* <p>{item.url}</p> */}
              <a href={item.url}>Read more</a>
            </Carousel.Caption>
          </Carousel.Item>

        ))}


      </Carousel>
    )
  }
}
