import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Flat from './components/flat'

class App extends Component {
  render() {

    return (
      <div>
      <Flat flat={flat} />

      </div>
    );
  }
}

export default App;
