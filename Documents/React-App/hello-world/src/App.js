import React, { Component } from 'react';
import './App.css';
import fuusiolabs from './fuusiolabs.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <a className="first-fusion"
          href="https://www.fuusiolabs.com"
           >
          <img src={fuusiolabs} className="logo-fuusionlabs" alt="logo" />
          </a>
          <h1>Hello World!</h1>
          <a
            className="App-link"
            href="https://www.fuusiolabs.com"
            target="_blank"
          >
           <img src={fuusiolabs} className="logoFussionLabs" alt ="logo" />
            
          </a>
        </header>
      </div>
    );
  }
}

export default App;
