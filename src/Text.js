import React, { Component } from 'react';
import './Text.css';

class Text extends Component {
	render(){
		return <div className="Text">
		<h1>{this.props.title}</h1>
		<h2>{this.props.txt}</h2>
		<h3>By {this.props.author}</h3>
		</div>
	}

}

export default Text;