import React, { Component } from "react";

class PhoneForm extends Component {
  state = {
    name: "",
    phoneNumber: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    // 페이지가 다시 불러와지는 것을 방지
    e.preventDefault();

    // App.js에서 정의한 handleCreate 함수에 this.state를 넣는다.
    this.props.onCreate(this.state);
    this.setState({
      name: "",
      phoneNumber: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="이름"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        ></input>
        <input
          placeholder="전화번호"
          value={this.state.phoneNumber}
          onChange={this.handleChange}
          name="phoneNumber"
        ></input>
        <button type="submit">등록</button>
      </form>
    );
  }
}

export default PhoneForm;
