import React, { Component } from 'react';
import './App.css';
import Form from './Form.js'
class App extends Component {
  constructor(props) {
    super(props);
    this.addPerson = this.addPerson.bind(this);
    this.state = {
      contacts: [
      {name: "Person 1", email: "person@one.com"},
      {name: "Person 2", email: "person@two.com"},
      {name: "Person 3", email: "person@three.com"}
      ]
    
    };
  }

  addPerson(name, email) {
    let copy = this.state.contacts.slice();
    copy.push({
      name: name,
      email: email
      });
    this.setState({
      contacts: copy
    });
  }

  render() {
    const list = this.state.contacts.map(c =>{
      return <p key={c.email}>{c.name} - {c.email}</p>
    }
);
    return (
      <div className="App">
      <h1>List of contacts:</h1>
      {list}
      <Form onClick={this.addPerson} />
      </div>

    );
  }
}

export default App;