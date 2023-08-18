import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Likitha Sri",
    };
    console.log("LifcycleA constructor method");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifcycleA getDerviedFromProps method");
    return null; // no state update is needed
  }
  componentDidMount() {
    console.log("LifcycleA componentDidMount method");
  }
  render() {
    console.log("LifcycleA render method");
    return (
      <div>
        LifeCycleA
        <LifeCycleB />
      </div>
    );
  }
}
export default LifeCycleA;
