import React, { Component } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Nav from './navbar';
import HomePage from './homepage';
import About from './about';
import Resume from './resume';
import Portfolio from './portfolio';
import ContactCut from './contactcut';

class App extends Component {
  render() {
    return (

      <div>
        <Nav />
        <HomePage />
        <About />
        <Resume />
        <Portfolio />
        <ContactCut />
      </div>

    );
  }
}

export default App;