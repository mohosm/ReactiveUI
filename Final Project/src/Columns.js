import React, { Component } from 'react';
import './Column.css';
import { CSSTransition } from "react-transition-group";

class Column extends Component {
 constructor(props){
    super(props);
    this.clicked = this.clicked.bind(this);
  }
  clicked(){
    this.props.onClick(this.props);
  }
  render() {
    // Making columns
    let theCol="";
if (this.props.theID===3 || this.props.theID===5 || this.props.theID===8|| this.props.theID===9 || this.props.theID===13 || this.props.theID===17){
    for  (let i = 0; i<this.props.noHeight; i++){
      theCol+="_"
    }
  } else if (this.props.theID===4 || this.props.theID===7 || this.props.theID===15 || this.props.theID===6){
    for  (let i = 0; i<this.props.noHeight; i++){
      theCol+="___"
    }
   }
   if (theCol.length > 25){
     theCol="__________________________"
   }
   let colClass = "";
   if (this.props.isP){
     colClass = "theColP"
   } else {
     colClass = "theCol"
   }
   if (this.props.context !== undefined && colClass!=="theColP"){
     colClass = this.props.context
   }

    return (<div className={this.props.cn} onClick={this.clicked} >

      <p className = {colClass}>{theCol}</p>
      <p className = "noDay" onMouseOver={this.show}>Day {this.props.day}</p>

      </div>
    );
  }
}

export default Column;
