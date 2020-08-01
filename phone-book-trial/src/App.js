import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import InfoList from "./components/InfoList";

class App extends Component {
  id = 2;
  state = {
    information: [
      {
        id: 0,
        name: "example1",
        phone: "010-0000-0000",
      },
      {
        id: 1,
        name: "example2",
        phone: "010-0000-0001",
      },
    ],
  };

  // Form 컴포넌트의 onCreate props로 동작할 함수
  handleSend = (inputData) => {
    const { information } = this.state;

    this.setState({
      information: information.concat({ id: this.id++, ...inputData }),
    });
  };

  // InfoList의 onRemove 속성에서 사용될 함수
  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      // 인자로 받는 id에 해당하는 요소를 제외하고 state를 갱신
      information: information.filter((el) => el.id !== id),
    });
  };

  render() {
    const { information } = this.state;
    return (
      <div className="App-wrapper">
        <Form onCreate={this.handleSend} />
        <InfoList data={information} onRemove={this.handleRemove} />
      </div>
    );
  }
}

export default App;
