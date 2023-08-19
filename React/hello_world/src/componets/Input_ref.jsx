import React, { Component } from "react";

class Input_ref extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  FocusInput = () => {
    this.inputRef.current.focus();
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}></input>
      </div>
    );
  }
}
export default Input_ref;
