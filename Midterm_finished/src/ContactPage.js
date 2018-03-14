import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ContactPage.css';

class ContactPage extends Component {
  render() {
    return (
      <div className="ContactPage">
        <h1>
          {this.props.contact.Firstname} {this.props.contact.Lastname}
        </h1>
        <img src={this.props.contact.imgUrl} width="300" height="300" alt="Couldn't load file" />
        <div className="number">{this.props.contact.phone}</div>
        <p>Email: {this.props.contact.email}</p>
        <p>Works at {this.props.contact.work}</p>
        <p> Located in {this.props.contact.city}</p>
        <Link to="/">Back to contact list</Link>
      </div>
    );
  }
}

export default ContactPage;