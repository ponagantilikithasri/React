import React, { Component } from "react";
import PureComp from "./componets/PureComp";
import RegularCompo from "./RegularCompo";
import MemoComp from "./MemoComp";

export default class Parent_exPure extends Component {
  // when parent component is Pure then childe component is doesn't re-render
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
        <MemoComp name={this.state.name} />
        {/* <PureComp name={this.state.name} />
        <RegularCompo name={this.state.name} /> */}
      </div>
    );
  }
}
