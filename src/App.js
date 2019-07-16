import React, {Component} from 'react';

class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      currentTodo: "",
    }
  }

  handleChange = event => {
    console.log(event.target.value) // returns each character put in
    this.setState ({
      currentTodo : event.target.value,
    })
  }

  addItem = event => {
    console.log("currentTodo is",this.state.currentTodo)
    // console.log("in addItem function, event is", event) // returns SyntheticEvent
    // console.log("in addItem function, event.target is", event.target) //returns <form>...</form> JSX element
    // console.log("in addItem function, event.target.value is", event.target.value) // returns undefined
    // console.log("current this.state.todos is", this.state.todos) // returns empty array
    console.log("before event added to todo array, todos arrray is", this.state.todos)
    event.preventDefault();
    this.setState ({
      todos : this.state.todos.push(this.state.currentTodo)
    })
    console.log("event added to todo array, now todos arrray is", this.state.todos)
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.addItem}>
          <label htmlFor="taskName">Task Name: </label>
          <input onChange={this.handleChange} name="taskName" type="text" placeholder="Add a todo here!" />
          <button type="submit">Add task</button>
        </form>
      </div>
    )
  };
}

export default ToDoList;