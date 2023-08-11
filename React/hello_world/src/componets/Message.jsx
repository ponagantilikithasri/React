import React, { Component } from "react";
class Message extends Component {
  constructor() {
    // Constructor
    super(); // indicates the Parent Class
    this.state = { message: "Welcome to the Youtube channel" };
  }
  ChangeMessage() {
    this.setState({
      message: "Thank you", // changing message
    });
  }
  render() {
    return (
      <div>
        <h1> {this.state.message}</h1>
        <button onClick={() => this.ChangeMessage()}>Subscribe</button>
      </div>
    );
  }
}
export default Message;
