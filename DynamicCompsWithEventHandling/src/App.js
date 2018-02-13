import React, { Component } from 'react';
import './App.css';
import Button from './Button';
import st from './Button';
import Disp from './Disp';

class App extends Component {
  constructor(props) {
    super(props);
    this.buttonWasClicked = this.buttonWasClicked.bind(this);
    this.state = {
      active: "None"
    
    };
  }

  buttonWasClicked(nm) {
  	
    this.setState({
      active: nm
    });
  }

  render() {
    const before = ["First puppy","Second puppy","Third puppy"]
    const after = before.map((item,i) =>{
      return <Button name={item} active={this.state.active === item} onClick={this.buttonWasClicked} key = {i} />
    }
);
    return (
      <div className="App">
        {after}
        <Disp displayC={this.state.active} />
      </div>
    );
  }
}

export default App;