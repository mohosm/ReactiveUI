import React, { Component } from 'react';
import './Form.css'
class Form extends Component {
  constructor(props) {
    super(props);
    this.setTheThing = this.setTheThing.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      email: ''
    };
  }

  setTheThing(e) {
    if (e.target.placeholder==="Name..."){
    this.setState({
      name: e.target.value
    });
  } else if(e.target.placeholder==="Email..."){
    this.setState({
      email: e.target.value
    });
    }
  }

  onSubmit(){
    if(this.state.name!=="" && this.state.email!=="" ){
    this.props.onClick(this.state.name, this.state.email);
    this.setState({
      name:'',
      email:''
    });
  }
}



  render() {
   
    return (
      <div className="Form">
      <input type="text" value={this.state.name} placeholder="Name..." onChange={this.setTheThing} />
      <input type="email" value={this.state.email} placeholder="Email..." onChange={this.setTheThing} />

      <button onClick={this.onSubmit}>Add new</button>
      </div>

    );
  }
}

export default Form;