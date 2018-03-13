import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Contact from "./Contact";
import './HomePage.css';

class HomePage extends Component {
  constructor(props){
    super(props);
    this.onSearch = this.onSearch.bind(this);
    this.sortIt = this.sortIt.bind(this);
this.state = {
      search: "",
      sort: "Last name"
    }

  }


  onSearch(e){
  this.setState({
    search: e.target.value
  })
}
  sortIt(g){
    this.setState({
    sort: g
  })
    }



  render() {

    const buttons = ["First name","Last Name", "Job", "Email","City"]
    const bmapped = buttons.map((item,i) =>{
      return <button className="lister" onClick={() => {
        this.sortIt(item);
      }
        

      }>{item}</button>
        
    });
    //let iss = {};
    let arrCopy = this.props.contacts.slice();
    if (this.state.sort === "Last name"){
    arrCopy = arrCopy.sort((a, b) => a.Lastname > b.Lastname);

  } else if (this.state.sort === "Job"){
    arrCopy = arrCopy.sort((a, b) => a.work > b.work);

  } else if (this.state.sort === "Email"){
    arrCopy = arrCopy.sort((a, b) => a.email > b.email);

  } else if (this.state.sort === "First name"){
    arrCopy = arrCopy.sort((a, b) => a.Firstname > b.Firstname);

  }else if (this.state.sort === "City"){
    arrCopy = arrCopy.sort((a, b) => a.city > b.city);

  }





    if (this.state.search !==""){
      arrCopy = arrCopy.filter(tweet => {
        let lowFirst = tweet.Firstname.toLowerCase();
        let lowLast = tweet.Lastname.toLowerCase();
        let lowJob = tweet.work.toLowerCase();
        let lowMail = tweet.email.toLowerCase();
        let lowState = this.state.search.toLowerCase();
        let lowCity = tweet.city.toLowerCase();
        let tooSearch = lowFirst + " " + lowLast + " " + lowJob + " " + lowMail + " "+ lowCity;
        return tooSearch.match(lowState);
      }
      

        
      );

    }
    const contactList = arrCopy.map(c => (

      <Contact  phone={c.phone} key = {c.id} id ={c.id} Firstname={c.Firstname} Lastname={c.Lastname} job={c.work} email={c.email} picURL={c.imgUrl} city={c.city} sorter={this.state.sort} />
    ));

    return <div className="HomePage">
  
  <div className = "container">
    {contactList}
    </div>
    <input type="text" placeholder="Search here" onChange={this.onSearch} />
        <div className = "footer">Sort by</div>
        <div className = "vertical">
        <div className="thelist">
        {bmapped}
        </div>
        <button className="act">{this.state.sort}</button>
        </div>

</div>
  }
}

export default HomePage;