import React, { Component } from 'react';
import './Medbox.css';

class Medbox extends Component {
 constructor(props){
    super(props);
    this.clicke=this.clicke.bind(this);
  }
  clicke(){
    this.props.onClick(this);
  }
  render() {
    let lit = "";
    let forclass= this.props.dat.type
  if (this.props.isLit){
    lit ="lit"
  }
  console.log(forclass+lit);
    return (
    <button onClick={this.clicke} className={"Medbox "+forclass+lit}>{this.props.dat.name}</button>
    );
  }
}

export default Medbox;
