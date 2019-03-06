import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';
import Input from './Input';
import './App.css';
import 'tachyons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <Input />
      </div>
    );
  }
}

export default App;
