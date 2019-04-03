import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

export class TodoInput extends React.Component {
  state = {
    value: ""
  };

  render() {
    return (
      <div className="row">
        <div className="col input-group todo-input">
          <input
            type="text"
            className="form-control "
            placeholder="New todo..."
            value={this.state.value}
            onChange={event => {
              this.setState({ value: event.target.value });
            }}
          />
          <button
            type="button"
            className="btn btn-primary add-btn"
            onClick={event => {
              this.props.onAddItem(this.state.value);
              this.setState({ value: "" });
            }}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}
