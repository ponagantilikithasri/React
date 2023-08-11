//class Component example
import React, { Component } from "react";
class Class_component extends Component {
  render() {
    const { name } = this.props; // destructiong props
    //    <h1> Hi this example of Class Component </h1>
    return <h1>Hi this is {name}</h1>;
  }
}
export default Class_component;
