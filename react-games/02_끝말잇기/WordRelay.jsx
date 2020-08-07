const React = require("react");
const { Component } = React;

class WordRelay extends Component {
  state = {
    word: "강아지",
    value: "",
    result: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      this.setState({
        word: this.state.value,
        result: "딩동댕",
        value: "",
      });
      this.input.focus();
    } else {
      this.setState({
        result: "땡",
        value: "",
      });
    }
  };

  onRefInput = (c) => {
    this.input = c;
  };
  onChangeInput = (e) => {
    this.setState({
      value: e.currentTarget.value,
    });
  };

  render() {
    return (
      <>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmit}>
          <input
            ref={this.onRefInput}
            value={this.state.value}
            onChange={this.onChangeInput}
          />
          <button type="submit">click</button>
        </form>
        <div>{this.state.result}</div>
      </>
    );
  }
}

module.exports = WordRelay;
