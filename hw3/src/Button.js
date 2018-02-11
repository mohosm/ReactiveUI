import React, { Component } from 'react';
import './Button.css';

class Button extends Component {


  render() {
  	let st = ""
    return (
      <button onClick={this.props.onClick} name ={this.props.name} className="Button">
        {this.props.name}
      </button>
    );
  }
}

export default Button;