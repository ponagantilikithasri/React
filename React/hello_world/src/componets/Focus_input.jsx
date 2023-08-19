import React, { Component } from "react";
import Input_ref from "./Input_ref";
class Focus_input extends Component {
  constructor(props) {
    super(props);
    this.FocusRef = React.createRef();
  }
  clickHandler = () => {
    this.FocusRef.current.FocusInput();
  };
  render() {
    return (
      <div>
        {/* <input_ref ref={this.FocusRef} /> */}
        <Input_ref ref={this.FocusRef} />
        <button onClick={this.clickHandler}> click me </button>
      </div>
    );
  }
}
export default Focus_input;
