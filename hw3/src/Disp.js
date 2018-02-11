import React, { Component } from 'react';
import './Disp.css';

class Disp extends Component {
	render(){
		return <div className="Disp">This is the button that was just clicked: {this.props.displayC}</div>

	}

}

export default Disp;