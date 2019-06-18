import React, { Component } from "react";
import Display from "./components/display/Display";
import Dashboard from "./components/dashboard/Dash";

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

  callBall = e => {
    e.preventDefault();
    if (this.state.balls === 3) {
      this.out();
    } else {
      let balls = this.state.balls + 1;
      this.setState({
        balls: balls
      });
    }
  };



  render() {
    return (
      <div className="App">
        <Display {...this.state} />
        <Dashboard
          {...this.state}
          callStrike={this.callStrike}
          callBall={this.callBall}
        />
      </div>
    );
  }
}

export default App;
