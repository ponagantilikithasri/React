import React, { Component } from "react";

class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increment() {
    // this.state.count = this.state.count + 1; we can't change the value without setState()

    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("CallBack function value", this.state.count);
    //   }
    // );
    this.setState((prevState, props) => ({
      count: prevState.count + 1, // preState is a parameter and it indicates intially count value
    }));
    console.log("Without call back function", this.state.count); // one value less than callback function
  }
  fiveincrement = () => {
    this.increment();
    this.increment();
    this.increment();
  };
  render() {
    return (
      <div>
        <div>Count {this.state.count}</div>
        <button onClick={() => this.fiveincrement()}>Button</button>
      </div>
    );
  }
}

export default Count;
