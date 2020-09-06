import React from 'react';
import Navbar from './Navbar';
import {Card} from 'react-bootstrap';
import "./App.css"


class News extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      news: []
    }
  }
  componentDidMount() {
    fetch('https://cryptic-ravine-96718.herokuapp.com/')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    this.setState({
      news: myJson.news
    })
  });
  }
  render() {
    console.log(this.state)
    return (
        <div>
          <Navbar />
          <div>
          <div className="NewsTop">
          {this.state.news.map((item, index) => {
            return (
              <div className="Newscontainer">
                <Card>
                    <Card.Body>
                    <span className="card-title">{item.title}</span>
                    <div className="card-action">
                    <a href={item.link}  className="readmore" rel="noopener noreferrer" target="_blank">Read More</a>
                    </div>
                    </Card.Body>
                </Card>
              </div>
            )
          })}
          </div>
        </div>
        </div>
    )
  }
}

export default News;