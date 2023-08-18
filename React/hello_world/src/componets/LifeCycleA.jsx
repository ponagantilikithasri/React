import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    };
    console.log("LifcycleA constructor method");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifcycleA getDerviedFromProps method");
    return null; // no state update is needed
  }
  shouldComponentUpdate() {
    console.log("LifeCycleA shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProp, prevState) {
    console.log("Life CycleA getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate(prevProp, prevState, snapshot) {
    console.log("LifeCycleA componentDidupdate");
  }
  componentDidMount() {
    console.log("LifcycleA componentDidMount method");
  }
  changeMethod = () => {
    this.setState({
      name: "Likitha's Channel",
    });
  };
  render() {
    console.log("LifcycleA render method");
    return (
      <div>
        LifeCycleA
        <button onClick={this.changeMethod}>Change button</button>
        <LifeCycleB />
      </div>
    );
  }
}
export default LifeCycleA;
