import React, { Component } from 'react';
import "./disp.css";
class Disp extends Component {
  constructor(props) {
    super(props);
  }


  render() {
       
    
    return (
      <div className="disp">
        <h1>{this.props.title}</h1>
        <h2>{this.props.bod}</h2>
        <h3>{this.props.dt}</h3>
      </div>
    );
  }
}


export default Disp;