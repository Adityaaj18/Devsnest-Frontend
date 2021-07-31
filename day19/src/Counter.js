import React, { Component } from "react";
class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increaseCounter() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.increaseCounter()}>
          {this.state.count}
        </button>
      </div>
    );
  }
}

export default Counter;
