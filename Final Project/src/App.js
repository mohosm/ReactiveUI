import React, { Component } from 'react';
import './App.css';
import content_header from "./imgs/content_header.png"
import Page from './Page'
import the_pages from './data/pages.json'
import biog from './data/data.json';
import sessionOne from './data/9094.json';
import sessionTwo from './data/9498.json';
import sessionThree from './data/9802.json';
import sessionFour from './data/0206.json';
import sessionFive from './data/0610.json';
import sessionSix from './data/1014.json';
import sessionSeven from './data/sessionSeven.json';
import sessionSixEU from './data/sessionSixEU.json';
import medias from './data/media.json'
import henchmen from './data/henchmen.json'
import sessionSixCON from './data/1014CON.json'
import sessionSevenSOROS from './data/1418SOROS.json'
import ALKcrit from './data/ALKcrit.json'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { CSSTransition } from "react-transition-group";

class App extends Component {
  constructor(props) {
    super(props);
    this.added=this.added.bind(this);
    this.init=this.init.bind(this);
    this.displayMenu=this.displayMenu.bind(this);
    this.killMenu=this.killMenu.bind(this);
    this.state = {
      showMenu: false,
      isLoading : true,
      contents: [
      {id: 1, title: "Introduction 1: After communism"}
      ],
      pages: []
    };
  }
  componentWillMount(){
    let g = the_pages;
    for(let i = 1; i < Object.keys(g).length+1; i++){
    if(g[i].jsonData=== "biog"){
      g[i].jsonData = biog;
    } else if(g[i].jsonData==="sessionOne"){
      g[i].jsonData = sessionOne
    } else if(g[i].jsonData==="sessionTwo"){
      g[i].jsonData = sessionTwo
    } else if(g[i].jsonData==="sessionThree"){
      g[i].jsonData = sessionThree
    } else if(g[i].jsonData==="sessionFour"){
      g[i].jsonData = sessionFour
    }else if(g[i].jsonData==="sessionFive"){
      g[i].jsonData = sessionFive
    }else if(g[i].jsonData==="sessionSix"){
      g[i].jsonData = sessionSix
    }else if(g[i].jsonData==="sessionSeven"){
      g[i].jsonData = sessionSeven
    }else if(g[i].jsonData==="sessionSixEU"){
      g[i].jsonData = sessionSixEU
    }else if(g[i].jsonData==="sessionSixCON"){
      g[i].jsonData = sessionSixCON
    }else if(g[i].jsonData==="ALKcrit"){
      g[i].jsonData = ALKcrit
    }else if(g[i].jsonData==="sessionSevenSOROS"){
      g[i].jsonData = sessionSevenSOROS
    }else if(g[i].jsonData==="medias"){
      g[i].jsonData = medias
      g[i].jsonData.leaderlegend=henchmen
    }
    let copy = this.state.pages;
    copy.push(g[i]);
    this.setState({
      pages: copy
    });
  }
  }
  init(){
    this.setState({
      isLoading: false
    });
  }
  displayMenu(){
    this.setState({
      showMenu: true
    });
  }
  killMenu(){
    this.setState({
      showMenu: false
    });
  }
  added(a,b){
    if (a!== 1){
  let vane = false;
  let copy = this.state.contents.slice();
 for(var i in copy){
      if(copy[i].id===a){
        vane = true;
      }
    };
    if (vane===false){
    copy.push({id: a, title: b});
   }
   copy= copy.sort((c,d) => c.id - d.id);
    this.setState({
      contents: copy
    });
  }

  }


  render() {
    let startButton;
    let contentButton;
    let cont0 = this.state.contents.slice();
    let cont1=cont0.map(c=>(
    <Link to={"/"+c.id.toString()} key={c.id} className={c.title+"menu"}>{c.title}</Link>
    ));

    if (window.location.pathname ==="/"){
      startButton=<Link to="/1"><button onClick={this.init} className="the_start">Start</button></Link>
      contentButton=""
    } else{
      startButton=""
      contentButton=<div className="contents" onMouseLeave={this.killMenu}>
                <a id="hdr" onMouseOver={this.displayMenu}><img  alt="List of contents" src={content_header} width="60" height="60" /></a>
                <CSSTransition
                in={this.state.showMenu}
                timeout={500}
                classNames="dropdown"
                unmountOnExit
                >
                  <div className="dropdown">
                    <h2>Contents:</h2>
                    <div className="contList">{cont1}</div>
                    </div>
                </CSSTransition>
              </div>
    }

    return (
      <Router>
        <div className="App">
        {startButton}
          <Route
            path="/:id"
            render={props => {
              const a_page = this.state.pages.find(
                c => c.id === parseInt(props.match.params.id,10)
              );

              return <Page key={a_page} pageData={a_page} onClick={this.added} />;
            }}
          />
{contentButton}
         </div>

      </Router>
    );
  }
}

export default App;
