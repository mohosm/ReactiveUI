import React, { Component } from 'react';
import {  Link } from 'react-router-dom';
import './Contact.css';

class Contact extends Component {
  render() {
  	
  		let sortie = ""
  	 if (this.props.sorter==="Email"){
  	 	  	  
  		sortie=this.props.email;
  
  	} else if (this.props.sorter==="Work"){
  		sortie=this.props.work;

  	}else if (this.props.sorter==="City"){
  		sortie=this.props.city;

  	}
      return (
      <div className="Contact">
      <img src={this.props.picURL} alt="Couldn't load file" />
      <div className="info">
  <Link to={"/contacts/"+this.props.id.toString()}>{this.props.Firstname} {this.props.Lastname}</Link>
      <p className="sname">{sortie}</p>
</div>

      </div>
 

     );
}
}

export default Contact;
