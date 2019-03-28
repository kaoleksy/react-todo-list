import React from "react";
import ReactDOM from "react-dom";
import { TodoList } from './TodoList';
import { TodoInput } from './TodoInput';
import { TodoItem } from './TodoItem';

import "./styles.css";

class App extends React.Component {
  state = {
    todos: ["item1", "item2", "item3"]
  };

  render() {
    return (
      <div>
        <TodoInput 
          onAddItem={item => {
            (item != '') ? this.setState({ todos: this.state.todos.concat(item) }) : '';        
          }}
        />
        <TodoList>
          {this.state.todos.map(todo => ( 
            <TodoItem text={todo} />
          ))}
        </TodoList>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
