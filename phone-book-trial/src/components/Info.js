import React, { Component } from "react";
import "./Info.css";

class Info extends Component {
  // 밑에 props의 고정된 값을 줘야 한다.
  // 값이 입력되지 않았을 때, 고정값을 심어주기 위함
  static defaultProps = {
    info: {
      name: "name",
      phone: "000-0000-0000",
      id: 0,
    },
  };

  handleRemove = () => {
    const { info, onRemove } = this.props;
    onRemove(info.id);
  };

  render() {
    // Info 컴포넌트가 사용되는 부분에서 info props에 대한 정의가 필요하다.
    const { name, phone } = this.props.info;
    return (
      <div className="info-wrapper">
        <div className="user-name">{name}</div>
        <div className="phone-number">{phone}</div>
        <button onClick={this.handleRemove}>삭제</button>
      </div>
    );
  }
}

export default Info;
