import React, { Component,useEffect } from 'react';
import '../css/contactcut.css';
import Aos from 'aos';
import {Link} from 'react-scroll';

const ContactCut = () => {

    return (
        
    	<div id="contact">
      <div style={{backgroundColor:'#f3f3f1',width:140,height:130,position:'absolute',top:0,left:0}}></div>
      <p style={{fontSize:80,fontWeight:'bold',position:'absolute',top:140,left:340}}>
      That's it! Now it's
      </p>
      <p style={{fontSize:80,fontWeight:'bold',position:'absolute',top:225,left:325}}> your turn to say hi.</p>

      <p style={{fontSize:30,position:'absolute',top:360,left:510}}>I hope to hear from you!</p>
        

        </div>
    );
}

export default ContactCut;