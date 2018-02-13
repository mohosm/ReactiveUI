import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
	 constructor(props) {
    super(props);
    this.clicke = this.clicke.bind(this);
}
	clicke(){
		this.props.onClick(this.props.name);
	}


  render() {
  	let classes = "Button"
  	if(this.props.active){
  		classes+= ' active'
  	}
    return (
      <button className={classes} onClick={this.clicke} name ={this.props.name} className={classes}>
        {this.props.name}
      </button>
    );
  }
}

export default Button;