import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      strikes: 0,
      balls: 0,
      fouls: 0,
      hit: false,
      out: false
    };
  }
  
  callStrike = e => {
    e.preventDefault();
    const strikes = this.state.strikes + 1;
    this.setState({
      ...this.state,
      strikes: strikes
    });
  };


export default App;
