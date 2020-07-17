import React, { Component } from 'react';
import Image from '../images/front4.jpg';
import '../css/particle.css';

class FrontPage extends Component {
  
  render() {
    return (
      <div style={{overflow:'hidden'}}>
      <div className='color'></div>
      <img src={Image} className='frontimg' />
      </div>
    );
  }
}

export default FrontPage;
