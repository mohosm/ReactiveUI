import React, { Component } from 'react';
import './App.css';
import Article from './Article.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      isLoading: true,
      article: []
    }

  }
componentDidMount(){
  fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=66a2a54ad3bf481890536456d3ad7ecd')
    .then(response => {
      return response.json();
    })
    .then(data=>{
      this.setState({
        isLoading: false,
        article: data.response.docs
      })
      console.log(this.state.article);
    });
}
  
  render() {
  let mapped = this.state.article.map(c=>{
   return <Article date={c.pub_date} title={c.headline.main} text={c.snippet} author={c.byline.original} />
  });
   if (this.state.isLoading){
    return (
      <div className="App">
      <p>Loading...</p>
      </div>

    );
  }else{
    return (
      <div className="App">
      {mapped}
      </div>
);
}
}}

export default App;