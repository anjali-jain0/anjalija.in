import React, { Component } from 'react';
import {Element} from 'react-scroll';
import '../css/about.css';
//import Image from './me.png';
import {Link} from 'react-scroll';
import pdf from '../cv.pdf';
import AboutImg from '../images/about.png';
import Aos from 'aos';

Aos.init({
 duration: 1200
});

class About extends Component {

  render() {
    return (
    	<div id='about'>
      <h4 style={{position:'absolute',top:230,left:650,fontSize:40}}>ABOUT ME</h4>

      <div style={{position:'absolute',top:220}}>

      <div style={{position:'absolute',top:-70,left:30}}>
        <div  data-aos="fade-up" className='border2'>
            <div cdata-aos="fade-up" className='border1'>
          <img className='aboutimg' src={AboutImg} />
    		  <img data-aos="fade-up" src={Image}/>
            </div>
        </div>
        
    		<div style={{color:'#cbd1d2',fontFamily:'Amiri',position:'absolute',top:110,left:620,width:600,height:430,lineHeight:1.6}}>
          <br/>

          <p style={{fontSize:20}}>Hi, I am Anjali Jain. I hail from the beautiful town of Udaipur in Rajasthan, India.I am an 
          undergraduate currently in my prefinal year, pursuing Integrated Post Graduate
          (B.Tech + M.Tech) degree in Information Technology.
          <br/>
          I have deep interest in computer programming and software development and am always curious to 
          learn.
          I keep exploring all the new technologies and love to stay updated about them 
          and believe that right innovation and integrations can work
          wonders.
          </p>

          <div style={{position:'relative',left:-10,top:0}}>
    		  <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={0}
              duration= {500}><button className='skillbtn'>SKILLS</button>
            </Link>
          <span style={{position:'relative',top:4}}>
            <a style={{textDecoration:'none'}} href={pdf} download="Anjali Jain_CV.pdf">
            <button className='downloadbtn'>
            <span style={{display:'flex',justifyContent:'space-between'}}>
              <span className="material-icons">file_download</span><span className='dbtn'> DOWNLOAD CV</span>
            </span>
            </button></a>
        </span>

        </div>
        
        </div>


    		</div>
        </div>
    	</div >
    );
  }
}

export default About;