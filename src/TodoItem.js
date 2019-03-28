import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

export class TodoItem extends React.Component {
  render() {
    return <li>{this.props.text}</li>;
  }
}
