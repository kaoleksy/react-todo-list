import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

export class TodoHeader extends React.Component {
  render() {
    return <h1 className="main-header">{this.props.header}</h1>;
  }
}
