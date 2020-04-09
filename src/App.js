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
  constructor() {
    super();

    this.state = {
      ToDos
    };
  }

  toggleCompleted = itemId => {
    console.log("toggleCompleted in app", itemId);

    this.setState({
      ToDos: this.state.ToDos.map(item => {
        if (item.id === itemId) {
          return {
            ...item,

            completed: !item.completed
          };
        }

        return item;
      })
    });
  };

  addItem = itemName => {
    this.setState({
      ToDos: [
        ...this.state.ToDos,

        {
          todo: itemName,

          completed: false,

          id: Date.now()
        }
      ]
    });
  };

  clearCompleted = () => {
    console.log("clear completed");

    this.setState({
      ToDos: this.state.ToDos.filter(item => {
        return !item.completed;
      })
    });
  };
  
  render() {
    return (
      <div>
        <div className="header">
          <h2>Welcome to Todo App!</h2>

          <ToDoForm addItem={this.addItem} />
        </div>

        <ToDoList
          ToDos={this.state.ToDos}
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
