import React, { Component } from "react";

export default class RefsDemo extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
    this.cbf = null; // callback function
    this.setCbrf = (element) => {
      this.cbf = element;
    };
  }
  componentDidMount() {
    if (this.cbf) {
      this.cbf.focus();
    }
    // this.inputRef.current.focus();
    // console.log(this.inputRef);
    // console.log(this.inputRef.current.value);
  }
  clickHandler = () => {
    alert(`${this.inputRef.current.value}`);
  };
  render() {
    return (
      <div>
        <input ref={this.inputRef}></input>
        <input ref={this.setCbrf}></input>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}
