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
    let url = "https://newsapi.org/v2/everything?q=world&from=2023-05-14&to=2023-05-14&sortBy=popularity&apiKey=b74ac86b10ed4fc48de6c54c65090449&page=2&pageSize=10";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
   
  }
  render() {
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
