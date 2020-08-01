import React, { Component } from "react";

class PhoneInfo extends Component {
  static defaultProps = {
    info: {
      name: "이름",
      phoneNumber: "010-0000-0000",
      id: 0,
    },
  };

  state = {
    editing: false,
    name: "",
    phoneNumber: "",
  };

  handleRemove = () => {
    const { info, onRemove } = this.props;
    onRemove(info.id);
  };

  handleToggleEdit = () => {
    const { editing } = this.state;
    this.setState({
      editing: !editing,
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value, // name은 개별 input 태그 안에 존재한다.
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { info, onUpdate } = this.props;

    // 변경 전이 false고 변경 후가 true 일때
    if (!prevState.editing && this.state.editing) {
      this.setState({
        name: info.name,
        phoneNumber: info.phoneNumber,
      });
    }

    // 변경 전이 true이고 변경 후가 false 일때
    if (prevState.editing && !this.state.editing) {
      onUpdate(info.id, {
        name: this.state.name,
        phoneNumber: this.state.phoneNumber,
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      !this.state.editing &&
      !nextState.editing &&
      nextProps.info === this.props.info
    ) {
      return false;
    }
    return true;
  }

  render() {
    const style = {
      border: "1px solid black",
      padding: "8px",
      margin: "8px",
    };

    const { editing } = this.state;

    if (editing) {
      return (
        <div style={style}>
          <div>
            <input
              value={this.state.name}
              name="name"
              placeholder="이름"
              onChange={this.handleChange}
            />
            <input
              value={this.state.phoneNumber}
              name="phoneNumber"
              placeholder="전화번호"
              onChange={this.handleChange}
            />
          </div>
          <button onClick={this.handleToggleEdit}>적용</button>
          <button onClick={this.handleRemove}>삭제</button>
        </div>
      );
    }

    const { name, phoneNumber } = this.props.info;

    return (
      <div style={style}>
        <div>
          <b>{name}</b>
        </div>
        <div>{phoneNumber}</div>
        <button onClick={this.handleToggleEdit}>수정</button>
        <button onClick={this.handleRemove}>삭제</button>
      </div>
    );
  }
}

export default PhoneInfo;
