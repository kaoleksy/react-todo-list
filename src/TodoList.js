import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

export class TodoList extends React.Component {
  render() {
    return (
      <div>
        <ul>{this.props.children}</ul>
      </div>
    );
  }
}
