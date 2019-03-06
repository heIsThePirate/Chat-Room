import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';
import Input from './Input';
import './App.css';
import 'tachyons';

class App extends Component {
  constructor() {
    super();
    this.state = {
      msg: '',
      chats: [],
      id: 0,
    };

    this.writeMessage = this.writeMessage.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  writeMessage(e) {
    this.setState({
      msg: e.target.value,
    })
  }

  handleClick(e) {
    let chats = Object.assign([], this.state.chats);
    chats.push({
      username: this.state.id,
      msg: this.state.msg,
    });
    let msg = Object.assign({}, this.state.msg);
    msg = '';
    let id = Object.assign(0, this.state.id);
    id = id + 1;
    this.setState({
      msg: msg,
      chats: chats,
      id: id,
    });
    console.log(this.state);
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Body chats={this.state.chats}/>
        <Input msg={this.state.msg} writeMessage={this.writeMessage} handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;
