import React, { Component } from "react";
class State_destruct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Likitha Sri",
      Age: "21",
    };
  }
  render() {
    const { name, Age } = this.state;

    return (
      <h1>
        hi this {name}and my age is {Age}
      </h1>
    );
  }
}
export default State_destruct;
