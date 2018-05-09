import React, { Component } from 'react';
import './Event.css';

class Event extends Component {
 constructor(props){
    super(props);
    this.clicked = this.clicked.bind(this);
  }
	clicked(){
		this.props.onClick(this.props);
	}

  render() {
   	let da =this.props.date[0]
  
   
    return (
    	<div className="element">
        <button className={"imp" +this.props.importance.toString()} onClick={this.clicked} >{this.props.title}</button>
      <p className="when">{da}</p>
      </div>
    );
  }
}

export default Event;