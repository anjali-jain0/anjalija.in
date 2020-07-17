import React, { Component } from 'react';
import '../css/headingeffect.css';
import {Link} from 'react-scroll';

class FrontPageText extends Component {

  render() {
    return (
    	<div >
    		<p 
        style={{fontFamily:'Cinzel',color:'black',position:'absolute',top:150,left:100,
        fontSize:70}}> 
        ANJALI JAIN</p>
    		<p className='p1' style={{position:'absolute',top:240,left:220}}>UI/UX Designer |</p>
        <p className='p2' style={{position:'absolute',top:240,left:220}}>Web Developer |</p>
        <p style={{position:'absolute',top:330,left:100,fontSize:23}}> 
        I love to explore about new technologies and</p>
        <p style={{position:'absolute',top:365,left:170,fontSize:23}}>to stay updated about them.</p>
        <br/>

         <p style={{position:'absolute',top:410,left:100,fontSize:23}}>I believe that right innovation and 
         integrations</p>
         <p style={{position:'absolute',top:445,left:220,fontSize:23}}> can work
          wonders.</p>


          <div style={{position:'absolute',top:530,left:140}}>
          <a className='mail' href="" >jainanjali043@gmail.com </a></div>
         <div className="arrow">
         <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration= {500}
          ><span className='mouse'>
            <span className='mouse-movement'>
            </span>
          </span>
          <p className='shrt'>See portfolio</p>
        </Link>
    	</div>
      </div>
    );
  }
}

export default FrontPageText;