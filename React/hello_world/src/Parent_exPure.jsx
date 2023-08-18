import React, { Component } from "react";
import PureComp from "./componets/PureComp";
import RegularCompo from "./RegularCompo";

export default class Parent_exPure extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Likithasri",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Likithasri",
      });
    }, 2000);
  }
  render() {
    console.log("**********Parent class***********");
    return (
      <div>
        Parent_exPure
        <PureComp name={this.state.name} />
        <RegularCompo name={this.state.name} />
      </div>
    );
  }
}
