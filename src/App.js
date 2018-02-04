import React, { Component } from 'react';
import Dat from './Dat';
import Pic from './Pic';
import Text from './Text';
import './App.css';

class App extends Component {
  render() {
      return (

      <div className="App">
      <div className="egy"><Dat  mmddyyyy="Feb. 3, 2018" /></div>
       <div className="ketto"><Text  title="New Doubts in Natalie Wood’s Death: ‘I Don’t Think She Got in the Water by Herself’" txt="The actress’s 1981 death at sea was recently reclassified as suspicious. Robert Wagner, her husband, is not a suspect but “more of a person of interest now,” the police said." author="Maya Salam" /></div>
      <div className="harom"><Pic /> </div>
      </div>
      );
  }
}

export default App;
