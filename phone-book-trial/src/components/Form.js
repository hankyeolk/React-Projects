import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  state = {
    name: "",
    phone: "",
  };

  // input으로 들어오는 데이터를 state에 반영해주는 이벤트 함수
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // input으로 들어온 데이터를 어디엔가 보내주는 함수
  handleSubmit = (e) => {
    e.preventDefault(); // 페이지가 다시 불러와지는 것을 방지

    // 이 컴포넌트가 사용되는 곳에서 onCreate라는 props를 찾아서
    // 그때 그 요소에 등록된 함수에 this.state를 넣어라.
    this.props.onCreate(this.state);
    this.setState({
      name: "",
      phone: "",
    });
  };

  render() {
    return (
      <form className="form-wrapper" onSubmit={this.handleSubmit}>
        <input
          className="form-input"
          value={this.state.name}
          name="name"
          onChange={this.handleChange}
          placeholder="이름"
        />
        <input
          className="form-input"
          value={this.state.phone}
          name="phone"
          onChange={this.handleChange}
          placeholder="전화번호"
        />
        <button type="submit">등록</button>
      </form>
    );
  }
}

export default Form;
