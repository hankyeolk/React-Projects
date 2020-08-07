import React, { Component } from "react";
import Twit from "./Twit";
import "../App.css";

class TwitList extends Component {
  static defaultProps = {
    information: [],
  };
  render() {
    const { information } = this.props;
    const list = information.map((el) => <Twit key={el.id} basic={el} />);
    return <div id="twit-wrapper">{list}</div>;
  }
}

export default TwitList;
