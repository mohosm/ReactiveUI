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
      name: "None"
    };
  }

  buttonWasClicked(e) {
    this.setState({
      name: e.target.name
    });
  }

  render() {
    return (
      <div className="App">
        <Button name="First puppy" onClick={this.buttonWasClicked} />
        <Button name="Second puppy" onClick={this.buttonWasClicked} />
        <Button name="Third puppy" onClick={this.buttonWasClicked} />
        <Disp displayC={this.state.name} />
      </div>
    );
  }
}

export default App;