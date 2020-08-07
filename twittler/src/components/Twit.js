import React, { Component } from "react";
import "../App.css";

class Twit extends Component {
  static defaultProps = {
    basic: {
      user: "user-name",
      message: "message",
      created_at: "0000-00-00 00:00:00",
    },
  };

  state = {};
  render() {
    const { user, message, created_at } = this.props.basic;
    return (
      <div className="twit-box">
        <div className="userName">{user}</div>
        <div className="twit">{message}</div>
        <div className="create-date">{created_at}</div>
      </div>
    );
  }
}

export default Twit;
