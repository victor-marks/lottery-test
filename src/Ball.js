import React, { Component } from 'react';
import './Ball.css';


/** Single ball in lottery. */

class Ball extends Component {
  render() {
    return (
      <div className="Ball"><i>{this.props.num}</i></div>
    )
  }
}


export default Ball;