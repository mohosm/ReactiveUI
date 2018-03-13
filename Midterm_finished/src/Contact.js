import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import './Contact.css';

class Contact extends Component {
  render() {
  	
  		let sortie = ""
  	 if (this.props.sorter==="Email"){
  	 	  	  
  		sortie=this.props.email;
  
  	} else if (this.props.sorter==="Job"){
  		sortie=this.props.job;

  	}else if (this.props.sorter==="City"){
  		sortie=this.props.city;

  	}
console.log(sortie);

      return (
      <div className="Contact">
      <img src={this.props.picURL} />
  <Link to={"/contacts/"+this.props.id.toString()}>{this.props.Firstname} {this.props.Lastname}</Link>
      <p className="sname">{sortie}</p>


      </div>
 

     );
}
}

export default Contact;
