import React, { Component } from 'react';
import "./Field.css";

class Field extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(val, d) {
    this.props.onChange(val.target.value,this.props.def);
  }

  render() {
       
    
    return (
      <div className="field">
      <p>{"Event " + this.props.def}</p>
      <input type="text" placeholder={"Please submit "+ this.props.def} onChange={this.onChange} value={this.props.type} />
      </div>
    );
  }
}

export default Field;