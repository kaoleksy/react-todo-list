import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

export class TodoItem extends React.Component {
  render() {
    return (
      <li
        className="list-group-item item"
        onClick={() => {
          this.props.ifDone(this.props.id);
        }}
      >
        {this.props.text}
        <button
          className="btn btn-danger btn-sm delete-button"
          type="button"
          onClick={() => {
            this.props.onDelete(this.props.id);
          }}
        >
          Delete
        </button>
      </li>
    );
  }
}
