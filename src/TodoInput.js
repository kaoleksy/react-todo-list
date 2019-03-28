import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

export class TodoInput extends React.Component {
  state = {
    value: ""
  };

  render() {
    return (
      <div>
        <input 
          value={this.state.value}
          onChange={event => {
            this.setState({ value: event.target.value });
          }}
        />
        <button
          onClick={event => {
            this.props.onAddItem(this.state.value);
            this.setState({ value: "" });
          }}
        >
          Add
        </button>
      </div>
    );
  }
}