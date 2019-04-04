import React from "react";
import ReactDOM from "react-dom";
import { TodoList } from "./TodoList";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";
import { TodoHeader } from "./TodoHeader";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, text: "Task1" },
        { id: 2, text: "Task2" },
        { id: 3, text: "Task3" }
      ]
    };
  }

  onDeleteItem = id => {
    console.log(id);
    let updatedTodos = this.state.todos.filter(item => item.id !== id);
    this.setState({
      todos: updatedTodos
    });
    console.log("deleted" + id);
  };

  onAddItem = item => {
    console.log("add item");
    if (item !== "") {
      let newTodo = {};
      newTodo.id = this.state.todos.length + 1;
      newTodo.text = item;
      this.setState({
        todos: [...this.state.todos, newTodo]
      });
      console.log(this.state.todos);
      console.log(typeof this.state.todos);
    }
  };

  ifDone = id => {};

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-8 offset-2">
            <TodoHeader header="Todo List" />
            <TodoInput onAddItem={this.onAddItem} />
            <div className="row">
              <div className="col">
                <TodoList>
                  {this.state.todos.map(todo => (
                    <TodoItem
                      id={todo.id}
                      text={todo.text}
                      onDelete={this.onDeleteItem}
                      ifDone={this.ifDone}
                    />
                  ))}
                </TodoList>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
