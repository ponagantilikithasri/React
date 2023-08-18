import React, { Component } from "react";

export default class RegularCompo extends Component {
  render() {
    // regular component re-render within given time interval why beacuse name are same so it doesn't render
    console.log("Regular component");
    return <div>RegularCompo {this.props.name}</div>;
  }
}
