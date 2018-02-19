import React, { Component } from 'react';
import './App.css';
import Field from './field'
import Disp from './disp'

class App extends Component {
  constructor(props) {
    super(props);
    this.writer = this.writer.bind(this);
     this.state = {
      title: "Title of event",
      text: "Location of event",
      date: "Date of event",
    
    };
  }

  writer(e,d){
    if (d ==="title"){
    this.setState({
      title: e
    })}
    if (d ==="description"){
    this.setState({
      text: e
    })}
    if (d ==="date"){
    this.setState({
      date: e
    })}

  }
  render() {

    const before = ["title","description","date"]
    const after = before.map((item,i) =>{
      return <Field def={item} 
      onChange={this.writer} 
      key={i} 
       />
     });

    return (
      <div className="App">
      <span>
      {after}
      </span>
      <span>
      <Disp title={this.state.title} bod={this.state.text} dt={this.state.date} />
      </span>
      </div>
    );
  }
}
export default App;