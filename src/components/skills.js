import React, { Component } from 'react';
import './skills.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Img from './skill.jpg';
import butter from './butter-client';

Aos.init({
 duration: 1200
});

class Skills extends Component {

  constructor(props){
    super(props);
    this.state={
        skill1:''
    }
  }

  componentWillMount(){
     let curr=this;
     butter.post.list({page: 1, page_size: 10}).then(function(response) {
        let skills = response.data.data[0].tags;
        curr.setState({skill1:skills[0].name});
        console.log(response.data.data[0].tags);
    })
  }

  render() {

    return (
    	<div id='skills'>
        <div style={{position:'relative',top:70}}>
            <div className='parallax' 
            style={{backgroundImage:'url(' + Img + ')',height:'auto',maxWidth:'100%'}}>
            <div className='ovrlay'></div>
            </div>
            <p  style={{position:'absolute',top:35,left:550,fontSize:50,color:'white'}}>MY SKILLS</p>

            <h5 style={{fontSize:18,position:'absolute',top:170,left:110,color:'white',fontFamily:'Acme'}}>
            Node.js</h5>
    		<div className="myProgress" style={{top:200,left:100}}>
                <div className="myBar" data-aos="new-animation1">{this.state.skill1}</div>
            </div>
            <h5 style={{fontSize:18,position:'absolute',top:270,left:110,color:'white',fontFamily:'Acme'}}>
            Javascript</h5>
            <div className="myProgress" style={{top:300,left:100}}>
                <div className="myBar" data-aos="new-animation2">70%</div>
            </div>
            <h5  style={{fontSize:18,position:'absolute',top:370,left:110,color:'white',fontFamily:'Acme'}}>
            React.js</h5>
            <div className="myProgress" style={{top:400,left:100}}>
                <div className="myBar" data-aos="new-animation3">90%</div>
            </div>
            <h5 style={{fontSize:18,position:'absolute',top:170,left:710,color:'white',fontFamily:'Acme'}}>
            Php</h5>
            <div className="myProgress" style={{top:200,left:700}}>
                <div className="myBar" data-aos="new-animation4">30%</div>
            </div>
            <h4 style={{position:'absolute',top:370,left:110,color:'white'}}></h4>
            <div className="myProgress" style={{top:300,left:700}}>
                <div className="myBar" data-aos="new-animation5">60%</div>
            </div>
            <h4 style={{position:'absolute',top:370,left:110,color:'white'}}></h4>
            <div className="myProgress" style={{top:400,left:700}}>
                <div className="myBar" data-aos="new-animation6">80%</div>
            </div>
        </div>
    	</div>
    );
  }
}

export default Skills;