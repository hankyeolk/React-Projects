import React, { Component } from "react";
import "../App.css";

Number.prototype.padLeft = function () {
  if (this < 10) {
    return "0" + String(this);
  } else {
    return String(this);
  }
};

Date.prototype.format = function () {
  var yyyy = this.getFullYear();
  var month = (this.getMonth() + 1).padLeft();
  var dd = this.getDate().padLeft();
  var HH = this.getHours().padLeft();
  var mm = this.getMinutes().padLeft();
  var ss = this.getSeconds().padLeft();

  var format = [yyyy, month, dd].join("-") + " " + [HH, mm, ss].join(":");
  return format;
};

class TwitForm extends Component {
  state = {
    user: "",
    message: "",
    created_at: "",
  };

  generateDate = () => new Date().format();

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      created_at: this.generateDate(),
    });
  };

  handleFilter = (e) => {};

  handleSubmit = (e) => {
    e.preventDefault();

    // 이 컴포넌트의 props에 onCreate를 부여하고,
    // 그 props에 묶이는 함수에 this.state 인자로 전달
    this.props.onCreate(this.state);

    // state 초기화
    this.setState({
      user: "",
      message: "",
      created_at: "",
    });
  };

  render() {
    return (
      <div id="twit-form">
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder=" Please input you name"
            value={this.state.user}
            name="user"
            onChange={this.handleChange}
          />
          <input
            id="twit-box"
            placeholder=" Twit your Twit"
            maxLength="140"
            value={this.state.message}
            name="message"
            onChange={this.handleChange}
          />
          <button type="submit">register twit</button>
          <input
            id="search"
            placeholder=" 🔍 search"
            onChange={this.handleFilter}
          />
        </form>
      </div>
    );
  }
}

export default TwitForm;
