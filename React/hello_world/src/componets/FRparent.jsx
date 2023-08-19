import React, { Component } from "react";
import FRinput from "./FRinput";

export default class FRparent extends Component {
  constructor(props) {
    super(props);
    this.Inputref = React.createRef();
  }
  clickHandler = () => {
    this.Inputref.current.focus();
  };
  render() {
    return (
      <div>
        <FRinput ref={this.Inputref} />
        <button onClick={this.clickHandler}>ForwardRef</button>
      </div>
    );
  }
}
