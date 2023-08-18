import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      comment: "",
      topic: "React",
    };
  }
  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value, // for changing null value into another value
    });
  };
  handleCommentChange = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };
  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };
  handleSubmit = (event) => {
    alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`);
    event.preventDefault(); // to stay the data in web page when dismiss the alert method
  };
  render() {
    const { username, comment, topic } = this.state; // destructuring
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={this.handleUsernameChange}
        ></input>
        <br></br>
        <label>Comment</label>
        <textarea
          value={comment}
          onChange={this.handleCommentChange}
        ></textarea>
        <br></br>
        <label>Topic</label>
        <select value={topic} onChange={this.handleTopicChange}>
          <option value="React">React</option>
          <option value="Angular">Angular</option>
          <option value="vue">VUE</option>
        </select>
        <br></br>
        <button>Submit</button>
      </form>
    );
  }
}
