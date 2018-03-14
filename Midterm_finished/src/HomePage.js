import React, { Component } from 'react';

import Contact from "./Contact";
import './HomePage.css';

class HomePage extends Component {
  constructor(props){
    super(props);
    this.onSearch = this.onSearch.bind(this);
    this.sortIt = this.sortIt.bind(this);
    this.filterIt = this.filterIt.bind(this);
this.state = {
      search: "",
      sort: "Lastname",
      filter:""
    }

  }
  filterIt(f){
  this.setState({
    filter: f
  })
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
    const buttons = ["First name","Last name", "Work", "Email","City"]
    const bmapped = buttons.map((item,i) =>{
      return <button className="lister" key={i} onClick={() => {
        this.sortIt(item);
      }
        

      }>{item}</button>
        
    });
    //
    let arrCopy = this.props.contacts.slice();
    if (this.state.sort === "Last name"){
    arrCopy = arrCopy.sort(function(a, b) {
        var x = a.Lastname;
        var y = b.Lastname;

        if (typeof x === "string")
        {
            x = (""+x).toLowerCase(); 
        }
        if (typeof y === "string")
        {
            y = (""+y).toLowerCase();
        }

        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });

  } else if (this.state.sort === "Work"){
    arrCopy = arrCopy.sort(function(a, b) {
        var x = a.work;
        var y = b.work;

        if (typeof x === "string")
        {
            x = (""+x).toLowerCase(); 
        }
        if (typeof y === "string")
        {
            y = (""+y).toLowerCase();
        }

        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });

  } else if (this.state.sort === "Email"){
    arrCopy = arrCopy.sort(function(a, b) {
        var x = a.email;
        var y = b.email;

        if (typeof x === "string")
        {
            x = (""+x).toLowerCase(); 
        }
        if (typeof y === "string")
        {
            y = (""+y).toLowerCase();
        }

        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });

  } else if (this.state.sort === "First name"){
    arrCopy = arrCopy.sort(function(a, b) {
        var x = a.Firstname;
        var y = b.Firstname;

        if (typeof x === "string")
        {
            x = (""+x).toLowerCase(); 
        }
        if (typeof y === "string")
        {
            y = (""+y).toLowerCase();
        }

        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });

  }else if (this.state.sort === "City"){
    arrCopy = arrCopy.sort(function(a, b) {
        var x = a.city;
        var y = b.city;

        if (typeof x === "string")
        {
            x = (""+x).toLowerCase(); 
        }
        if (typeof y === "string")
        {
            y = (""+y).toLowerCase();
        }

        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });

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
if (this.state.filter !=="All"){
    arrCopy = arrCopy.filter( item =>{
        return item.group.match(this.state.filter);
      }
    );
} else{
  arrCopy = this.props.contacts.slice();
}




    const contactList = arrCopy.map(c => (

      <Contact  phone={c.phone} key = {c.id} id ={c.id} Firstname={c.Firstname} Lastname={c.Lastname} work={c.work} email={c.email} picURL={c.imgUrl} city={c.city} sorter={this.state.sort} />
    ));

    const groups0 = this.props.contacts.slice();
    const groups1 = [];
    for(var i in groups0){
      groups1.push(groups0[i].group);
    };


    const groups2 = groups1.filter((item,pos)=>{
      return groups1.indexOf(item) === pos;
    }
    );
    const filterB = groups2.map(c => (
      <button onClick={() => {
        this.filterIt(c);
      }}>{c}</button>
    ));
    console.log(filterB);


    return <div className="HomePage">
  
  <div className = "container">
    {contactList}
    </div>
    <input type="text" placeholder="Search here" onChange={this.onSearch} />
    <div className="theTop">
    <button className="filterLink">Filter by group</button>
        <div className="filterDropdown">{filterB}<button onClick={(a) => {
        this.filterIt("All");
      }}>All</button></div>
        <div className = "footer">Sort by</div>
          </div>

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