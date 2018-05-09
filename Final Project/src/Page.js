import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Page.css';
import './video-react.css';
import { Player } from 'video-react';
import Event from './Event.js';
import Column from './Columns.js';
import Medbox from './Medbox.js'
import Box from './Box.js'
import home from './imgs/home.png'
import { CSSTransition } from "react-transition-group";

class Page extends Component {
  constructor(props){
    super(props);
    this.removeDupls = this.removeDupls.bind(this);
    this.highlight = this.highlight.bind(this);
    this.sBack = this.sBack.bind(this);
    this.addContent = this.addContent.bind(this);
    this.clicked = this.clicked.bind(this);
    this.nuller = this.nuller.bind(this);
    this.critUpdate = this.critUpdate.bind(this);
    this.topClicked = this.topClicked.bind(this);

    this.state ={
      showTopic : false,
      popup: "",
      matching : "NONE",
      critLegend:<div className="critLegend">
        <img src="https://24.p3k.hu/app/uploads/2013/05/solyom-laszlo-e1491219710280.jpg" />
        <p><i>"The changes have to be vetoed"</i></p>
        <h5>- Laszlo Solyom, ex-president</h5>
        <button onClick={this.critUpdate}>More</button>
      </div>,
      contLegend:<div className="legend"><h3>Click on days for more</h3>
      </div>,
      parLegend: <div className="legend"><h3>Click on days for more</h3>
      </div>,

      legend : <div className="legend"><div className="block1">
      <h3>Click on events for more</h3>
      </div>
      </div>,

      medLegend : <div className="legend"><div className="block1">
      <h3>Click on outlets for more</h3>
      </div>
      </div>
    }
}
  //show topic descriptions
  topClicked(e){
        this.setState({
          popup: e.v,
          showTopic:true

        });
      }
  //update const criticisms
  critUpdate(){
    let randName= Math.floor((Math.random() * 3) + 1);
    let randQuote=Math.floor((Math.random() * this.props.pageData.jsonData[randName].text.length));
    this.setState({
      critLegend:<div className="critLegend">
        <img src={this.props.pageData.jsonData[randName].img} />
        <p><i>''{this.props.pageData.jsonData[randName].text[randQuote]}''</i></p>
        <h5>- {this.props.pageData.jsonData[randName].name}</h5>
        <button onClick={this.critUpdate}>More</button>
      </div>
    });
  }
// add page to list of contents
  addContent(){
    this.setState({
      parLegend: <div className="legend">
      <h3>Day: </h3>
      <h4>Number of speeches: </h4>
      <p>Topics discussed:</p>
      <p></p>
      </div>
    });
    this.props.onClick(this.props.pageData.id, this.props.pageData.title);
  }
// remove duplicates from arrays
  removeDupls(arr){
   let unar = []
   for(let i = 0;i < arr.length; i++){
       if(unar.indexOf(arr[i]) === -1 && arr[i] !== ""){

         arr[i] = arr[i].replace(",","");
         if (arr[i] === "parliamentary_procedure"){
           arr[i]= "parliamentary procedure"
         }
         if (arr[i] === "foreign_policy"){
           arr[i]= "foreign policy"
         }
         if (unar.indexOf(arr[i])=== -1){
           unar.push(arr[i])
         }
         }
       }
   return unar
  }
// clear popup
nuller(){
  this.setState({
    showTopic: false
  });
}
// update data viz
  clicked(e){
    if(e.v !== undefined){
      this.setState({
        popup: e,
        showTopic: true
      });
    }
    if(e.title !== undefined){
    this.setState({
      legend : <div className="legend"><div className="block1">
      <h3>{e.title}</h3>
      <img src={e.photo} alt="Loading content" />
      </div>
      <div className="block2">
      <p>{e.details}</p>
      </div>
      </div>
    });
  }
  if(e.cn !== undefined){
    if (e.context === undefined && e.party === undefined){
    let tp = "";
    for (let i = 0; i<e.topics.length; i++){
      tp= tp+e.topics[i]+" ";
    }
    tp = tp.replace(',','');
    let tpAR = tp.split(" ");
    tpAR = this.removeDupls(tpAR);
    let tops = tpAR.map(c=>{
      return <Box onMouseLeave={this.sBack} onClick={this.topClicked} onMouseOver={this.highlight} v={c} />
    });
    this.setState({
      parLegend : <div className="legend">
      <h3>Day: {e.day}</h3>
      <h4>Number of speeches: {e.noHeight}</h4>
      <p>Topics discussed:</p>
      <ul>{tops}</ul>
      </div>
    });
  } else if(e.party !== undefined){
    let fidesz ="";
    let kdnp="";
    let mszp="";
    let jobbik="";
    let lmp ="";
    let independent ="";
    for (let i =0; i<e.party.length; i++){
      if(e.party[i].includes("Fidesz")){
        fidesz+="____"
      } else if(e.party[i].includes("KDNP")){
        kdnp+="____"
      }else if(e.party[i].includes("MSZP")){
        mszp+="____"
      }else if(e.party[i].includes("Jobbik")){
        jobbik+="____"
      }else if(e.party[i].includes("LMP")){
        lmp+="____"
      }else if(e.party[i].includes("independent")){
        independent+="____"
      }
    }
    let part = <div className="bar"><p onMouseOver={this.showNum} className="fid">{fidesz}</p><p className="kdn">{kdnp}</p><p className="job">{jobbik}</p><p className="msz">{mszp}</p><p className="lmp">{lmp}</p><p className="ind">{independent}</p></div>
    if (e.cn !== "ColumnSeven"){
    this.setState({
      contLegend:<div className="conlegend">
      <h3>Day: {e.day}</h3>
      <h3>Number of speeches on the topic: {e.noHeight}</h3>
      <div className="pListing"><span> Fidesz- <p className="fid vis">This day: {(fidesz.length/4).toString()} Total: 109 </p></span><span> KDNP- <p className="kdn vis">This day: {(kdnp.length/4).toString()} Total: 54 </p></span><span>Jobbik- <p className="job vis">This day: {(jobbik.length/4).toString()} Total: 151 </p></span><span> MSZP- <p className="msz vis">This day: {(mszp.length/4).toString()} Total: 168 </p></span><span>LMP- <p className="lmp vis">This day: {(lmp.length/4).toString()} Total: 76 </p></span><span> Independent:<p className="ind vis"> This day: {(independent.length/4).toString()} Total: 9 </p></span></div>
      <div>{part}</div>
      </div>
    });
  }else{
    this.setState({
      contLegend:<div className="conlegend">
      <h3>Day: {e.day}</h3>
      <h3>Number of speeches on the topic: {e.noHeight}</h3>
      <div className="pListing"><span> Fidesz- <p className="fid vis">This day: {(fidesz.length/4).toString()} Total: 178 </p></span><span> KDNP- <p className="kdn vis">This day: {(kdnp.length/4).toString()} Total: 68 </p></span><span>Jobbik- <p className="job vis">This day: {(jobbik.length/4).toString()} Total: 69 </p></span><span> MSZP- <p className="msz vis">This day: {(mszp.length/4).toString()} Total: 60 </p></span><span>LMP- <p className="lmp vis">This day: {(lmp.length/4).toString()} Total: 32 </p></span><span> Independent:<p className="ind vis"> This day: {(independent.length/4).toString()} Total: 12 </p></span></div>
      <div>{part}</div>
      </div>
    });
  }
  }else{
    this.setState({
      contLegend: <div className="legend">
      <h3>Day: {e.day}</h3>
      <h5>Number of speeches on the topic: {e.noHeight}</h5>
      <h5>Context: <span className={e.context+"Class"}>{e.context}</span></h5>
      <h4>Quote of the day: </h4>
      <p>{e.quote}</p>
      </div>
    });
  }
  }
  if(e.props !== undefined){
    let leAR = e.props.dat.leader.split(",");
    let nms = leAR.map(c=>{
      return <Box onMouseLeave={this.sBack} onClick={this.clicked} onMouseOver={this.highlight} v={c} />
    });
    this.setState({
      medLegend: <div className="legend"><div className="block1">
      <h3>{e.props.dat.name}</h3>
      </div>
      <div className="block2">
      <p>{nms}</p>
      <p>{e.props.dat.legend}</p>
      </div>
      </div>
    });
  }
  }
// highlight field in parliament vizualization
  highlight(e){
    this.setState({
      matching: e,
    });
  }
// when backwards button is clicked
  sBack(){
    this.setState({
      matching: "NONE"
    });
  }
  render() {
    // Data visualizations
    let f =""
    let isViz = ""
    let days = [[],[],[],[]];
    let arrows= [];
    let arm;
    let g =this.props.pageData.jsonData;
    let menuItems = [{"img": "http://imanas.shanghai.nyu.edu/~mm7134/Capstone/pics/Orbparl.jpg", "title":"Orban in the parliament", "where":"/4"},{"img": "http://imanas.shanghai.nyu.edu/~mm7134/Capstone/pics/Alkot.jpg", "title":"Reforming the constitution", "where":"/16"},{"img": "http://imanas.shanghai.nyu.edu/~mm7134/Capstone/pics/Freepress.jpg", "title":"War against the free press", "where":"/13"},{"img": "http://imanas.shanghai.nyu.edu/~mm7134/Capstone/pics/EUrel.jpg", "title":"Relations with the European Union","where":"/22"}];


    if (this.props.pageData.data === 1){
       f = g.map(c =>{
      return <Event onClick={this.clicked} key={c.event.title} title={c.event.title} date={c.event.date} details={c.event.details} importance={c.event.importance} nature={c.event.nature} photo={c.event.picUrl} />
    }
);
} else if ((this.props.pageData.data <= 9 && this.props.pageData.data >= 3) || this.props.pageData.data === 15 || this.props.pageData.data === 13 || this.props.pageData.data === 17){
      let clName;
      if (this.props.pageData.data === 3 ){
        clName = "Column";
      } else if (this.props.pageData.data === 4 || this.props.pageData.data === 7 || this.props.pageData.data === 6){
        clName = "ColumnTwo";
      } else if (this.props.pageData.data === 5 || this.props.pageData.data === 9){
        clName = "ColumnThree"
      } else if (this.props.pageData.data === 8  ){
        clName = "ColumnFour"
      } else if (this.props.pageData.data === 15 ){
        clName ="ColumnFive"
      } else if (this.props.pageData.data === 13 ){
        clName ="ColumnSix"
      }else if (this.props.pageData.data === 17 ){
        clName ="ColumnSeven"
      }
      if (this.props.pageData.data !== 15 && this.props.pageData.data !== 13  && this.props.pageData.data !== 17){
      var i;
      for (i=1; i<g.meta.total+1; i++){
        let thisTopics = [];
       if(days[0].indexOf(g.speeches[i].day)===-1){
          days[0].push(g.speeches[i].day);
          thisTopics.push(g.speeches[i].topics);
          days[2].unshift(thisTopics);
          days[1].unshift(1);
       } else {
        days[1][0]+=1;
        days[2][0].push(g.speeches[i].topics);
       }
      }
      days = [days[0],days[1].reverse(),days[2].reverse()];
      for (let j=0; j<days[2].length; j++){
        days[2][j]= this.removeDupls(days[2][j]);
      }
      let cols = [];
      for (i=0; i<days[0].length; i++){
        cols.push([days[0][i], days[1][i],days[2][i]]);
      }

        f = cols.map(c =>{
        let t = false;
        let ts = c[2].toString();
        ts = ts.replace("_"," ");
        if (ts.includes(this.state.matching)){
          t = true
        }
      return <Column  key={this.props.pageData.data+c[0].toString()} onClick={this.clicked} isP={t} cn={clName} day={c[0]} noHeight={c[1]} topics={c[2]} theID={this.props.pageData.data} />
    });
  } else if (this.props.pageData.data === 15){
    var i;
    for (i=1; i<g.meta.total+1; i++){
      let thisQuote = "";
      let thisContext = "";
     if(days[0].indexOf(g.speeches[i].day)===-1){
        days[0].push(g.speeches[i].day);
        thisQuote+=g.speeches[i].text;
        thisContext+=g.speeches[i].context;
        days[2].unshift(thisQuote);
        days[3].unshift(thisContext);
        days[1].unshift(1);
     } else {
      days[1][0]+=1;
      days[2][0]+=thisQuote;
        days[3][0]+=thisContext;
     }
    }
    days = [days[0],days[1].reverse(),days[2].reverse(),days[3].reverse()];
    let cols = [];
    for (i=0; i<days[0].length; i++){
      cols.push([days[0][i], days[1][i],days[2][i],days[3][i]]);
    }
      f = cols.map(c =>{
    return <Column  key={this.props.pageData.data+c[0].toString()} onClick={this.clicked} cn={clName} day={c[0]} noHeight={c[1]} quote={c[2]} context={c[3]} theID={this.props.pageData.data} />
  });
}else if (this.props.pageData.data === 13 || this.props.pageData.data === 17){
  var i;
  for (i=1; i<g.meta.total+1; i++){
   if(days[0].indexOf(g.speeches[i].day)===-1){
     days[2].unshift([g.speeches[i].party]);
      days[0].push(g.speeches[i].day);
      days[1].unshift(1);
   } else {
    days[1][0]+=1;
    days[2][0].push(g.speeches[i].party);
   }
  }
  days = [days[0],days[1].reverse(),days[2].reverse()];
  let cols = [];
  for (i=0; i<days[0].length; i++){
    cols.push([days[0][i], days[1][i],days[2][i]]);
  }
    f = cols.map(c =>{
  return <Column  key={this.props.pageData.data+c[0].toString()} onClick={this.clicked} cn={clName} day={c[0]} party={c[2]} noHeight={c[1]} theID={this.props.pageData.data} />
});
}
} else if (this.props.pageData.data === 10){
  g=this.props.pageData.jsonData.pages;
  let medarr = [];
  for (let k = 1; k<17; k++){
    medarr.push(g[k]);
  }

  f = medarr.map(c =>{
    let a;
    let plusClas=false;
      if (c.leader.includes(this.state.matching)){
        plusClas=true
      }
    let noo = c.name.indexOf(" ");
    a = c.name.slice(0,noo);
    a = a.replace(",","");
  return <div className={"Class"+a}><Medbox isLit={plusClas} dat={c} onClick={this.clicked}  key={c.name} theID={this.props.pageData.data} /></div>
});
for (let g=0; g<15; g++){
  arrows.push({"arrow":"←", "c": "Arrow"+g.toString()});
}
arm = arrows.map(c=>{
  return  <div className={"arGen "+ c.c}>{c.arrow}</div>
});
}
if (this.props.pageData.data === 1){
isViz = <div className="viz">{f} {this.state.legend}</div>
}else if (this.props.pageData.data === 2){
      f=menuItems.map(c=>{
        return <div className="MainElement" key={c.title}>

        <Link onMouseOver={this.menuHighlight} onMouseLeave={this.menuHighlight} to={c.where}><img src={c.img} className="thePho" /><p>{c.title}</p></Link>


        </div>
      });
      isViz=<div className="mainMenu">{f} <Link to="/27"><button className="forward">Bibliography</button></Link></div>
    }else if(this.props.pageData.data <= 9 && this.props.pageData.data >= 3){
      isViz=<div className="parVizDown">{f} {this.state.parLegend}</div>
    }else if(this.props.pageData.data === 10){
      isViz=<div className="parViz"><div className="container">{f}{arm}</div> {this.state.medLegend}</div>
    }else if(this.props.pageData.data === 15){
      isViz=<div className="parVizDown">{f} {this.state.contLegend}</div>
    }else if(this.props.pageData.data === 13 || this.props.pageData.data === 17){
      isViz=<div className="parVizDown">{f} {this.state.contLegend}</div>
    }else if(this.props.pageData.data === 14){
      isViz=<div>{this.state.critLegend}</div>
    }else{
      f = ""
    }

// Video
    let vid;
    if (this.props.pageData.video !== ""){

      vid = <div className="bigVid"><Player
      playsInline
      poster="http://imanas.shanghai.nyu.edu/~mm7134/Capstone/pics/orban_fideszleader.jpg"
      src={this.props.pageData.video}
    /></div>
    }
// Text
      let pageText;
      if (this.props.pageData.text!==""){
       if (this.props.pageData.tOr === "bottom"){
        pageText = pageText = <div className="text_bottom" dangerouslySetInnerHTML={{ __html: this.props.pageData.text }} />

      }else if (this.props.pageData.tOr === "top"){
        pageText = <div className="text_top" dangerouslySetInnerHTML={{ __html: this.props.pageData.text }} />

      }
      } else {
        pageText=""
      }
// Forward-backward buttons
      let forward;
      const linkTo = this.props.pageData.id+1;
    if (this.props.pageData.isF && this.props.pageData.title !== "Homepage"){

      forward = <Link onClick={this.addContent} className="forward" to={"/"+linkTo.toString()}>→</Link>;
    } else{
      forward = "";
    }
    let back;
    let backTo;
    if(this.props.pageData.id !== 1){
      if(this.props.pageData.id !==13 && this.props.pageData.id !==17 && this.props.pageData.id !==22 && this.props.pageData.id !==27){
      backTo = this.props.pageData.id-1;
    } else {
      backTo = 3;
    }
      back = <Link onClick={this.addContent} className="back" to={"/"+backTo.toString()}>←</Link>;
    } else {
      back = "";
    }
// Title
    let the_title=""
    if (this.props.pageData.title !== "Homepage"){
      the_title=<h1>{this.props.pageData.title}</h1>
    }
// Image
    let thisImg;
    if(this.props.pageData.pic !== ""){
      if (this.props.pageData.id !== 10 && this.props.pageData.id !== 13 && this.props.pageData.id !== 15 && this.props.pageData.id !== 24 && this.props.pageData.id !== 26 && this.props.pageData.id !== 21){
      thisImg = <img className="bigImg" src={this.props.pageData.pic} alt="Loading material"></img>
    } else {
        thisImg = <img className="wideImg" src={this.props.pageData.pic} alt="Loading material"></img>
      }
    }
// Home button
    let homeButton = ""
    if(this.props.pageData.needshome){
      homeButton = <Link onClick={this.addContent} id="homeB" to="/3"><img  alt="Go to Homepage" src={home} width="50" height="50" /></Link>
    }
// Pop-ups
  let pop;
      if (this.props.pageData.id <=11 && this.props.pageData.id >=5){
      for(let i = 0; i < this.props.pageData.jsonData.meta.topics.length; i++){
        if( this.props.pageData.jsonData.meta.topicLegend[i+1].topic.includes(this.state.popup)){
          pop=<CSSTransition
          in={this.state.showTopic}
          timeout={500}
          classNames="popup"
          unmountOnExit
          >
          <div className="popup mid">
            <h2>{this.props.pageData.jsonData.meta.topicLegend[i+1].topic}</h2>
            <p>{this.props.pageData.jsonData.meta.topicLegend[i+1].legend}</p>
            <button onClick={this.nuller}>X</button>
          </div>
          </CSSTransition>
        }
      }
    }else if (this.props.pageData.id===14){
      let fonok ="";
      let hatter="";
      let kep="";
        for (let i = 1; i<Object.keys(this.props.pageData.jsonData.leaderlegend).length+1;i++){
          if(this.state.popup.v ===this.props.pageData.jsonData.leaderlegend[i].name){
            fonok = this.props.pageData.jsonData.leaderlegend[i].name;
            hatter =this.props.pageData.jsonData.leaderlegend[i].legend;
            kep = this.props.pageData.jsonData.leaderlegend[i].url;
          }
      pop =<CSSTransition
      in={this.state.showTopic}
      timeout={500}
      classNames="popup"
      unmountOnExit
      >
      <div className="popup">
        <h2>{fonok}</h2>
        <img src={kep} width="50%" />
        <p>{hatter}</p>
        <button onClick={this.nuller}>X</button>
      </div>
      </CSSTransition>
    }

  }
    return (
      <div className="Page">
        {the_title}
        {homeButton}
        {vid}
        {thisImg}
        {pageText}
        {forward}
        {back}
        {isViz}
        {pop}
      </div>
    );
  }
}
export default Page;
