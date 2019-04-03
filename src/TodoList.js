import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

export class TodoList extends React.Component {
  render() {
    return <ul className="list-group">{this.props.children}</ul>;
  }
}
