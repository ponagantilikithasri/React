import React, { Component } from "react";

export class Class_Click extends Component {
  Eventhandle = () => {
    console.log("You clicked me ");
  };
  render() {
    return <button onClick={this.Eventhandle}>Class_Click</button>;
  }
}

export default Class_Click;
