import React, { Component } from 'react';
import Article from './Article';
import './App.css';

class App extends Component {
  render() {
      return (

      <div className="App">
      <Article date="Feb. 6, 2018" title="4 Takeaways From Monday’s Stock Market Sell-Off" text="Stocks around the globe tumbled on Monday, extending a sell-off that began last week. It’s a sign of shifting economic tides, but there have been far worse Mondays for the markets." author="The New York Times" picURL="https://static01.nyt.com/images/2018/02/06/business/06MARKETSTAKEAWAY1/merlin_133332803_91ab5215-0a2e-42b8-9d51-af9c65953936-mediumThreeByTwo210.jpg"/>
      <Article date="Feb. 6, 2018" title="Failing Markets Show Trump the Other Side of the Tax Stimulus" text="If stocks continue to fall, it won’t be because the president’s tax policies are failing, but because they may overheat the economy, spurring inflation. " author="Andrew Ross Sorkin" picURL="https://static01.nyt.com/images/2018/02/06/business/06SORKIN2/merlin_133231631_c6a4f363-04ea-41f3-96d5-968dc00f606b-mediumThreeByTwo210.jpg"/>
      <Article date="Feb. 6, 2018" title="How Does Monday's Stock Plunge Stack Up?" text="Stock investors have endured a number of big drops over past three decades. Monday’s sell-off, on a percentage basis, isn’t close to the worst." author="Stephen Grocer" picURL="https://static01.nyt.com/images/2018/02/06/business/06DB-STOCKHIS2/06DB-STOCKHIS2-mediumThreeByTwo210.jpg"/>
      </div>
      );
  }
}

export default App;
