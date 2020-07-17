import React, { Component } from 'react';
import FrontPageText from './frontpagetext';
import FrontPage from './frontpage';

class HomePage extends Component {

  render() {
    return (
    	<div id='homepage'>
    	<FrontPage/>
    	<FrontPageText />
    	</div >
    );
  }
}

export default HomePage;