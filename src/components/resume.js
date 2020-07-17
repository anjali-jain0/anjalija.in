import React, { Component } from 'react';
import '../css/resume_style.css';
import Img from '../images/resume.png';

class Resume extends Component {

  render() {
    return (
    	<div id='resume'>
        <div style={{backgroundColor:'#f3f3f1',width:150,height:110,position:'relative',top:-70,left:1120}}></div>
            <h3 style={{fontSize:50,position:'relative',left:100,top:0}}>Resume</h3>
            <div className='start'>
            <br/><br/>
            <br/>
            <div className='main'>
                <div className='block1'>
                    <h6 style={{fontFamily:'Acme',fontSize:20}}>SKILLS </h6>
                    <br/>
                    <p className='resumetxt'>
                    <b>Proficient in </b>: Javascript , Node , HTML5 ,
                    CSS3
                    <br/><br/>
                    <b>Comfortable in </b>: Web Sockets , C++ , C
                    <br/><br/>
                    <b>Other Frameworks/Libraries/Tools </b>: React.js
                    , Express.js , Mongodb, Canvas , Bootstrap ,
                    AJAX , Jquery , Git , Npm , Webpack , Babel ,
                    Latex
                    </p>
                </div>
                <img src={Img} style={{zIndex:1,width:1220,height:500,position:'absolute',left:-50,top:0}} />
                <div className='block2'>
                <h6 style={{fontFamily:'Acme',fontSize:20}}>EDUCATION </h6>
                <br/>
                     <h6 style={{fontFamily:'Acme',fontSize:20}}>Senior Year (Class XII) </h6>
                    <h6 className='resumetxt'>MDS Senior Secondary School, Udaipur</h6>
                    <p>2014-2016</p>
                    <p className='resumetxt'><b>Percentage</b> - 93.2%</p>
                    <br/>
                    <h6 style={{fontFamily:'Acme',fontSize:20}}>
                    Integrated B.tech + M.tech, Information Technology</h6>
                    <h6 className='resumetxt'>IIITM, Gwalior</h6>
                    <p>2016-present</p>
                    <p className='resumetxt'><b>CGPA</b> - 7.86/10 </p>
                </div>
            </div><br/>
    
          </div>  
    	</div >
    );
  }
}

export default Resume;