import React, { Component } from 'react';

class Box extends Component {
 constructor(props){
    super(props);
    this.over = this.over.bind(this);
    this.bye = this.bye.bind(this);
    this.clicked = this.clicked.bind(this);
  }
	over(){
		this.props.onMouseOver(this.props.v);
	}
  clicked(){
    if (this.props.onClick !== "" ){
    this.props.onClick(this.props);
  }
  }
  bye(){
    this.props.onMouseLeave();
  }

  render() {
    return (
      <li onMouseLeave={this.bye} onClick={this.clicked} onMouseOver={this.over}>{this.props.v}</li>
    );
  }
}

export default Box;
