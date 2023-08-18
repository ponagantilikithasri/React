import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Likitha Sri",
    };
    console.log("LifcycleB constructor method");
  }
  static getDerviedStateFromProps(prop, state) {
    console.log("LifeCycleB getDerviedFromProps method");
    return null; // no state update is needed
  }
  componentDidMount() {
    console.log("LifcycleB componentDidMount method");
  }
  render() {
    console.log("LifeCycleB render method");
    return <div>LifeCycleB</div>;
  }
}
export default LifeCycleB;
