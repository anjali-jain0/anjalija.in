import React, { Component } from 'react';
import Isotope from 'isotope-layout';
import '../css/portfolio.css';
import $ from 'jquery';
import p1 from '../images/p1.png';
import p2 from '../images/p2.png';

const select = (f,cls,nme) => {
    $(".btnp1").removeClass("selectbtn");
    $(".btnp1").addClass("btnp");

    $(".btnp2").removeClass("selectbtn");
    $(".btnp2").addClass("btnp");

    $(".btnp3").removeClass("selectbtn");
    $(".btnp3").addClass("btnp");

    $(".btnp4").removeClass("selectbtn");
    $(".btnp4").addClass("btnp");

    $(".btnp5").removeClass("selectbtn");
    $(".btnp5").addClass("btnp");

    $(cls).removeClass("btnp");
    $(cls).addClass("selectbtn");
    f(nme);
}

const Portfolio = () => {
  const [isotope, setIsotope] = React.useState(null);

  const [filterKey, setFilterKey] = React.useState("react");

  React.useEffect(() => {
    setIsotope(
      new Isotope(".filter-container", {
        itemSelector: ".filter-item",
        layoutMode: "fitRows"
      })
    );
  }, []);

  React.useEffect(
    () => {
      if (isotope) {
        filterKey === "*"
          ? isotope.arrange({ filter: `*` })
          : isotope.arrange({ filter: `.${filterKey}` });
      }
    },
    [isotope, filterKey]
  );

  return (
    <div id='portfolio'>
     <div style={{position:'relative',top:250}}>
      <p style={{fontSize:60,position:'absolute',top:-80,left:140}}> PORTFOLIO</p>
      <br/>
      <br/>

      <button className='btnp btnp1 selectbtn' onClick={() => select(setFilterKey,".btnp1","react")}>
        <h5>React.js</h5>
      </button>
      <button className='btnp btnp2' onClick={() => select(setFilterKey,".btnp2","node")}>
        <h5>Node.js</h5>
      </button>
      <button className='btnp btnp3' onClick={() => select(setFilterKey,".btnp3","php")}>
        <h5>Php</h5>
      </button>
      <button className='btnp btnp4' onClick={() => select(setFilterKey,".btnp4","canvas")}>
        <h5>Canvas</h5>
      </button>
      <button className='btnp btnp5' onClick={() => select(setFilterKey,".btnp5","django")}>
        <h5>Django</h5>
      </button>


      <br/><br/><br/><br/>
      <div className='box'>

      <ul className="filter-container">

         <div className="filter-item node">
          <span className='con1'>
          <div className='pro'>
              <h4 className='phead'>Online Flight Booking</h4>
              
               <img style={{width:120,height:70,padding:20}} src={p1} />
               
              <p className='para' style={{fontSize:16}}>
              An application to search and book flights with Payment Gateway integration.
              <br/><br/>
              It also provides facilities to view, verify, cancel tickets and receive notifications.
              </p>
              <div style={{marginTop:-10,marginLeft:100}}>
              <a target='_blank' href="https://github.com/anjali-jain0/Nodejs_Get_Ur_Flight_Tickets" >
                <button className='lbtn'> View Source </button>
              </a>
              </div>
            </div>
          </span>
        </div>




          <div className="filter-item node">
          <span className='con2'>
          <div className='pro'>
              <h4 className='phead'>FindDoc</h4>
            
               <img style={{width:120,height:70,padding:20}} src={p1} />
               
              <p className='para' style={{fontSize:16}}>
              Practo look alike web app with facility to
              search hospitals, doctors in your area.
              <br/><br/>
              Allows to book appointments and get online doctor consultations as well.
              </p>
              <div style={{marginTop:-10,marginLeft:100}}>
              <a target='_blank' href="https://github.com/anjali-jain0/Nodejs_FindDoc" >
                <button className='lbtn'> View Source </button>
              </a>
              </div>
            </div>
          </span>
        </div>


       <div className="filter-item node react">
          <span className='con3'>
          <div className='pro'>
              <h4 className='phead'>Mern Social
              <span style={{marginLeft:80,fontSize:18,color:'black'}}><a href='#'> Demo</a></span></h4>
       
               <img style={{width:120,height:70,padding:20}} src={p1} />
               
              <p className='para' style={{fontSize:16}}>
              A web app with Instagram like features which allows to follow,
              connect,make private groups, search for and invite friends.
              <br/><br/>
              Build using MERN stack and Socket.io.
              </p>
              <div style={{marginTop:-10,marginLeft:100}}>
              <a target='_blank' href="https://github.com/anjali-jain0/MERN_Social" >
                <button className='lbtn'> View Source </button>
              </a>
              </div>
            </div>
          </span>
        </div>

          <div className="filter-item node">
          <span className='con4'>
          <div className='pro'>
              <h4 className='phead'>ChatApp</h4>
       
              
               <img style={{width:120,height:70,padding:20}} src={p1} />
               
              <p className='para' style={{fontSize:16}}>
              Real Time Chat Application with facilty to view active members, chat personally or in group.
              <br/><br/>
              Built using Node.js and Socket.io.
              </p>
              <div style={{marginTop:-10,marginLeft:100}}>
              <a target='_blank' href="https://github.com/anjali-jain0/Nodejs_ChatApp" >
                <button className='lbtn'> View Source </button>
              </a>
              </div>
            </div>
          </span>
        </div>

         <div className="filter-item node">
          <span className='con5'>
          <div className='pro'>
              <h4 className='phead'>Tracking System</h4>
            
              
               <img style={{width:120,height:70,padding:20}} src={p1} />
               
              <p className='para' style={{fontSize:16}}>
                Platform to book products and get unique id to track parcel online.
                <br/><br/>
                Email/messaging facilites and admin side to manage different orders built using Nodejs.
              </p>
              <div style={{marginTop:-10,marginLeft:100}}>
              <a target='_blank' href="https://github.com/anjali-jain0/Track_Your_Order" >
                <button className='lbtn'> View Source </button>
              </a>
              </div>
            </div>
          </span>
        </div>

        <div className="filter-item node react">
          <span className='con6'>
          <div className='pro'>
              <h4 className='phead'>Image Search Engine</h4>
             
              
               <img style={{width:120,height:70,padding:20}} src={p1} />
               
              <p className='para' style={{fontSize:16}}>
                  Web app to get different number of images for the searched word built using Reactjs.
              <br/><br/>
               It is to view and search for different images using the Pixabay API.
              </p>
              <div style={{marginTop:-10,marginLeft:100}}>
              <a target='_blank' href="https://github.com/anjali-jain0/Image_Search_Engine" >
                <button className='lbtn'> View Source </button>
              </a>
              </div>
            </div>
          </span>
        </div>

        <div className="filter-item react">
          <span className='con7'>
          <div className='pro'>
              <h4 className='phead'>Conway's Game of Life</h4>
            
              
               <img style={{width:120,height:70,padding:20}} src={p1} />
               
              <p className='para' style={{fontSize:16}}>
                The board game concerned with cellular automation built using the presented rules.
                  <br/><br/>
                  A version of the traditional Conway's game of life built using Reactjs.
              </p>
              <div style={{marginTop:-10,marginLeft:100}}>
              <a target='_blank' href="https://github.com/anjali-jain0/Game_of_life" >
                <button className='lbtn'> View Source </button>
              </a>
              </div>
            </div>
          </span>
        </div>

        <div className="filter-item react">
          <span className='con8'>
          <div className='pro'>
              <h4 className='phead'>Lyric Finder</h4>
             
              
               <img style={{width:120,height:70,padding:20}} src={p1} />
               
              <p className='para' style={{fontSize:16}}>
               A platform to search for different songs and top trending songs information.
               <br/><br/>
               Now get to know the lyrics of the songs that are bugging you.
              </p>
              <div style={{marginTop:-10,marginLeft:100}}>
              <a target='_blank' href="https://github.com/anjali-jain0/Lyric_Finder" >
                <button className='lbtn'> View Source </button>
              </a>
              </div>
            </div>
          </span>
        </div>

        <div className="filter-item django">
          <span className='con9'>
          <div className='pro'>
              <h4 className='phead'>Polling App</h4>
             
              
               <img style={{width:120,height:70,padding:20}} src={p1} />
               
              <p className='para' style={{fontSize:16}}>
               This is a voting quiz to view and vote for different presented questions.
                <br/><br/>
                Admin to manage, update and add new questions.
              </p>
              <div style={{marginTop:-10,marginLeft:100}}>
              <a target='_blank' href="https://github.com/anjali-jain0/Django_React_Store" >
                <button className='lbtn'> View Source </button>
              </a>
              </div>
            </div>
          </span>
        </div>

        <div className="filter-item react">
          <span className='con10'>
          <div className='pro'>
              <h4 className='phead'>Delivery App</h4>
             
              
               <img style={{width:120,height:70,padding:20}} src={p1} />
              <p className='para' style={{fontSize:16}}>
               Web app to deliver order in secured, varifiable way across supply chain nodes.
               <br/><br/>
              Built using Nodejs, Reactjs and Ethereum Blockchain.
               
              </p>
              <div style={{marginTop:-10,marginLeft:100}}>
              <a target='_blank' href="https://github.com/anjali-jain0/Random_text_Generator" >
                <button className='lbtn'> View Source </button>
              </a>
              </div>
            </div>
          </span>
        </div>


        <div className="filter-item php">
          <span className='con11'>
          <div className='pro'>
              <h4 className='phead'>Web Scraper</h4>
              
              
               <img style={{width:120,height:70,padding:20}} src={p1} />
               
              <p className='para' style={{fontSize:16}}>
                 Tool built using Php and Php Simple HTML DOM Parser.
                <br/><br/>
                It is used to extract data and different information from Stack Overflow website.
              </p>
              <div style={{marginTop:-10,marginLeft:100}}>
              <a target='_blank' href="https://github.com/anjali-jain0/Php_Web_Scrapper" >
                <button className='lbtn'> View Source </button>
              </a>
              </div>
            </div>
          </span>
        </div>

        <div className="filter-item php">
          <span className='con12'>
          <div className='pro'>
              <h4 className='phead'>Recipe Blog</h4>
              
              
               <img style={{width:120,height:70,padding:20}} src={p1} />
               
              <p className='para' style={{fontSize:16}}>
                 Who doesn't love food right!!.
                <br/><br/>
                Page to view and add different recipes with user information
                 built using Php with Mysql database. 
              </p>
              <div style={{marginTop:-10,marginLeft:100}}>
              <a target='_blank' href="https://github.com/anjali-jain0/Php_Recipe_Blog" >
                <button className='lbtn'> View Source </button>
              </a>
              </div>
            </div>
          </span>
        </div>

         <div className="filter-item django">
          <span className='con13'>
          <div className='pro'>
              <h4 className='phead'>Article Blog</h4>
              
              
               <img style={{width:120,height:70,padding:20}} src={p1} />
               
              <p className='para' style={{fontSize:16}}>
                Platform to view articles with login/signup facility to
                create new pages/blogs. 
                <br/><br/>
                Admin to manage, update, creaete new posts.
                Builtusing Django, Reactjs.
              </p>
              <div style={{marginTop:-10,marginLeft:100}}>
              <a target='_blank' href="https://github.com/anjali-jain0/Python_Blog" >
                <button className='lbtn'> View Source </button>
              </a>
              </div>
            </div>
          </span>
        </div>

        <div className="filter-item canvas">
          <span className='con14'>
          <div className='pro'>
              <h4 className='phead'>Typing Attack Game</h4>
              
              
               <img style={{width:120,height:70,padding:20}} src={p1} />
               
              <p className='para' style={{fontSize:16}}>
              An educational game with goal to type the words on balloons to destroy them before they reach base.
              <br/> <br/>
              Built using Canvas Api and Javasript.
              </p>
              <div style={{marginTop:-10,marginLeft:100}}>
              <a target='_blank' href="https://github.com/anjali-jain0/Typing_Attack" >
                <button className='lbtn'> View Source </button>
              </a>
              </div>
            </div>
          </span>
        </div>

         <div className="filter-item canvas">
          <span className='con15'>
          <div className='pro'>
              <h4 className='phead'>Snake game</h4>
            
              
               <img style={{width:120,height:70,padding:20}} src={p1} />
               
              <p className='para' style={{fontSize:16}}>
                A fun game to play while waiting for things.
                <br/><br/>
                Move the snake around with the arrow keys, eat the red dots to grow bigger, 
                and avoid hitting your own tail.
              </p>
              <div style={{marginTop:-10,marginLeft:100}}>
              <a target='_blank' href="https://github.com/anjali-jain0/Snake-Game" >
                <button className='lbtn'> View Source </button>
              </a>
              </div>
            </div>
          </span>
        </div>

         <div className="filter-item canvas">
          <span className='con16'>
          <div className='pro'>
              <h4 className='phead'>Ping-Pong</h4>
              
               <img style={{width:120,height:70,padding:20}} src={p1} />
               
              <p className='para' style={{fontSize:16}}>
                Hit the ping pong ball into opponent's goal
                making use of keyboard arrow keys to control the paddles.
                <br/><br/>
              Built using Html5 canvas and Javascript.
              </p>
              <div style={{marginTop:-10,marginLeft:100}}>
              <a target='_blank' href="https://github.com/anjali-jain0/Ping_pong" >
                <button className='lbtn'> View Source </button>
              </a>
              </div>
            </div>
          </span>
        </div>

         <div className="filter-item canvas">
          <span className='con17'>
          <div className='pro'>
              <h4 className='phead'>Color-Walk</h4>
              
               <img style={{width:120,height:70,padding:20}} src={p1} />
               
              <p className='para' style={{fontSize:16}}>
              Select different color patches in board presented 
                to clear the board targeting for minimum score.
                <br/><br/>
                Built using HTML5 canvas and Javascript.
              </p>
              <div style={{marginTop:-10,marginLeft:100}}>
              <a target='_blank' href="https://github.com/anjali-jain0/Colorwalk" >
                <button className='lbtn'> View Source </button>
              </a>
              </div>
            </div>
          </span>
        </div>


      </ul>
      </div>
      </div>
    </div>
  );
};

export default Portfolio;