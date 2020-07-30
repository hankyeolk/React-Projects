import React, { Component } from "react";
import Info from "./Info";

class InfoList extends Component {
  static defaultProps = {
    data: [],
  };

  render() {
    // 나중에 InfoList 컴포넌트를 사용하는 곳에서 data props는 아마도 배열일 것이다.
    const { data } = this.props;

    // el은 기본적으로 App.js에 만들어둔 state 데이터와 input으로 들어오는 데이터
    const list = data.map((el) => <Info info={el} key={el.id} />);
    return <div>{list}</div>;
  }
}

export default InfoList;
