import React, { Component } from 'react';
import '../css/navstyle.css';
import Img1 from '../images/github.png';
import Img2 from '../images/linkedin.png';

class Nav extends Component {

  render(){
   return (
      <div className='nav'>
        <a target='_blank' href="https://github.com/anjali-jain0">
        	<img src={Img1} style={{zIndex:5,width:40,height:40,marginLeft:1240,marginTop:1}} />
        </a>
        <a href="https://www.linkedin.com/in/anjali-jain-31b717161/" target='_blank'>
        	<img src={Img2} style={{zIndex:5,width:40,height:40,marginLeft:1290,marginTop:-70}} />
        </a>
      </div>
    );
  }
}

export default Nav;
