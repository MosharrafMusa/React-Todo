import React from 'react';
import ToDolist from "./components/TodoList"
import ToDoForm from "./components/TodoForm"
import "./components/Todo.css"

const ToDos = [
{
  todo: "Study the TK",
  id: 12,
  completed: false
},
{
  todo: "Go eat pizza",
  id: 12,
  completed: false
},
{
  todo: "Attend Guided Lecture",
  id: 12,
  completed: false
},

]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
