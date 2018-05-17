import React, { Component } from 'react';
import Slider from 'react-rangeslider';
import logo from './logo.svg';
import click1 from './Audio/click1.wav';
import click2 from './Audio/click2.wav';

import './App.css';

class App extends Component {

  constructor (props, context) {
    super(props, context)
    this.state = {
      value: 150,
      isToggleOn: false,
      counter: 0
    }
    this.click1 = new Audio(click1);
    this.click2 = new Audio(click2);
  }

  handleChange = value => {
    this.setState({
      value: value
    })
  };

  play = () => {
        if(this.state.counter %4) {
          this.click2.play();
        } else {
          this.click1.play();
        }
        this.setState({
          counter: this.state.counter+1
        })
      }

  handleClick = () => {
    if(this.state.isToggleOn) {
      clearInterval(this.timer)
      this.setState(() => ({
        isToggleOn: false,
        counter: 0
      }));
    } else {
      this.timer = setInterval(this.play, (60/this.state.value)*1000)
      this.setState(() => ({
        isToggleOn: true
      }));
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className='value'> it's {this.state.value} BPM</div>
        <Slider
          min={60}
          max={240}
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      </div>
    );
  }
}

export default App;
