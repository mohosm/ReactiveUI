import React, { Component } from 'react';
import './Dat.css';

class Dat extends Component {
	render(){
		return <div className="Dat">{this.props.mmddyyyy}</div>
	}

}

export default Dat;