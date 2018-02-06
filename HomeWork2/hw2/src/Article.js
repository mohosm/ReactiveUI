import React, { Component } from 'react';
import './Article.css';

class Article extends Component {
	render(){
		return <div className="cont"><h1>{this.props.date}</h1>
		<section className="mid"><h2>{this.props.title}</h2>
		<h3>{this.props.text}</h3>
		<p>By <span>{this.props.author}</span></p></section>
		<figure><img src={this.props.picURL} /></figure></div>

	}

}

export default Article;