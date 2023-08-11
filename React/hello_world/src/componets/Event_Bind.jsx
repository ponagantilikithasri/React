import React, { Component } from "react";

class Event_Bind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hi",
    };
    // this.ClickHandle = this.ClickHandle.bind(this); // Binding in constructor for approch 3
  }
  // by making ClickHandle function as arrow function it is approach four
  //   ClickHandle() {
  ClickHandle = () => {
    this.setState({
      message: "Hello",
    });
  };
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* we can do event binding in 4 ways */}
        {/* <button onClick={this.ClickHandle.bind(this)}>Click</button>  1st Event binding */}
        {/* <button onClick={() => this.ClickHandle()}>Click</button> 2nd  Event binding*/}
        {/* <button onClick={this.ClickHandle}>Click</button> Bind in constructor like approch 1 */}
        <button onClick={this.ClickHandle}>Click</button>
        {/* Making ClickHandle function as arrow function then we can use */}
        {/* 1st Event
        binding */}
      </div>
    );
  }
}

export default Event_Bind;
