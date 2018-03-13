import React, { Component } from 'react';
import './App.css';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [
      {Firstname: 'Fred', Lastname: "Saratoga", work:"NYU", email:"fred@gmail.com",phone:"+123456789", imgUrl:'http://www.eikonphoto.com/wp-content/uploads/2017/03/male-headshot-e1515783468636.jpg', id:1, city: "Shanghai"},
      {Firstname: 'Annie', Lastname: "Markle",work:"NYU", email:"annie@gmail.com",phone:"+987654321", imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQXM9yBbt5t-uGqridPuzhcjTAmzftt0jofZwSi7umVmWH6aJCVg', id:2, city: "New York"},
      {Firstname: 'Hassan', Lastname: "Yan",work:"NYT",email:"hassan@gmail.com",phone:"+234567891", imgUrl:'https://2arwdp1dlwob2ihy4u33bv5f-wpengine.netdna-ssl.com/wp-content/uploads/2015/03/Chicago-Headshot-Photographer_23.jpg', id:3,city: "Shanghai"},
      {Firstname: 'Omar', Lastname: "Ryan", work:"NYT", email:"omar@gmail.com",phone:"+345678912", imgUrl:'https://i1.wp.com/theheadshotcreative.com/wp-content/uploads/2018/01/hsc-3.jpg?w=422&h=422&crop=1', id:4, city: "London"},
      {Firstname: 'Fred', Lastname: "Saratoga", work:"NYU", email:"fred@gmail.com",phone:"+456789123", imgUrl:'http://www.eikonphoto.com/wp-content/uploads/2017/03/male-headshot-e1515783468636.jpg', id:5, city: "Shanghai"},
      {Firstname: 'Annie', Lastname: "Markle",work:"NYU", email:"annie@gmail.com",phone:"+567891234", imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQXM9yBbt5t-uGqridPuzhcjTAmzftt0jofZwSi7umVmWH6aJCVg', id:6, city: "New York"},
      {Firstname: 'Hassan', Lastname: "Yan",work:"NYT",email:"hassan@gmail.com",phone:"+678912345", imgUrl:'https://2arwdp1dlwob2ihy4u33bv5f-wpengine.netdna-ssl.com/wp-content/uploads/2015/03/Chicago-Headshot-Photographer_23.jpg', id:7,city: "Shanghai"},
      {Firstname: 'Omar', Lastname: "Ryan", work:"NYT", email:"omar@gmail.com",phone:"+789123456", imgUrl:'https://i1.wp.com/theheadshotcreative.com/wp-content/uploads/2018/01/hsc-3.jpg?w=422&h=422&crop=1', id:8, city: "London"},
      {Firstname: 'Fred', Lastname: "Saratoga", work:"NYU", email:"fred@gmail.com",phone:"+891234567", imgUrl:'http://www.eikonphoto.com/wp-content/uploads/2017/03/male-headshot-e1515783468636.jpg', id:9, city: "Shanghai"},
      {Firstname: 'Annie', Lastname: "Markle",work:"NYU", email:"annie@gmail.com",phone:"+912345678", imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQXM9yBbt5t-uGqridPuzhcjTAmzftt0jofZwSi7umVmWH6aJCVg', id:10, city: "New York"},
      {Firstname: 'Hassan', Lastname: "Yan",work:"NYT",email:"hassan@gmail.com",phone:"+000056789", imgUrl:'https://2arwdp1dlwob2ihy4u33bv5f-wpengine.netdna-ssl.com/wp-content/uploads/2015/03/Chicago-Headshot-Photographer_23.jpg', id:11,city: "Shanghai"},
      {Firstname: 'Omar', Lastname: "Ryan", work:"NYT", email:"omar@gmail.com",phone:"+666656789", imgUrl:'https://i1.wp.com/theheadshotcreative.com/wp-content/uploads/2018/01/hsc-3.jpg?w=422&h=422&crop=1', id:12, city: "London"}
      ]
    };
  }

  render() {


    return (
      <Router>
        <div className="App">
          <Route
            exact
            path="/"
            component={props => {
              return <HomePage contacts={this.state.contacts} />;
            }}
          />
          <Route
            path="/contacts/:id"
            render={props => {
              // Find contact
              const contact = this.state.contacts.find(
                c => c.id === parseInt(props.match.params.id,10)
              );

              // Pass to component as prop
              return <ContactPage contact={contact} />;
            }}
          />
         
        </div>
        
      </Router>
    );
  }
}

export default App;