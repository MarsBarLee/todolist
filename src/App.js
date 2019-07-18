import React, {Component} from 'react';
import { arrayExpression } from '@babel/types';

class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: ["Dance", "Jump", "Sleep"],
      currentTodo: "",
    }
  }

  handleChange = event => {
    console.log(event.target.value) // returns each character put in
    this.setState ({
      currentTodo : event.target.value, //change value of currentTodo to characters put in
    })
  }

  addItem = event => {
    console.log("currentTodo is",this.state.currentTodo)
    console.log("before event added to todo array, todos arrray is", this.state.todos)
    event.preventDefault();
    this.setState ({
      todos : [...this.state.todos, this.state.currentTodo] //
      // Syntax is [..array, elementToAdd]
      // ..array creates a copy of the array
      // elementToAdd is added 
      // [] square brackets to tell ...spread operator that the context is an array, because spread works differently with strings and objects
      // ...spread in arrays makes a copy. ...spread as a function works same as apply method
    })
    console.log("event added to todo array, now todos arrray is", this.state.todos)
  }

  deleteItem = index => {
    console.log("deletedItem fired")
    console.log("deleteItem's arguement, index is",index) // returns the index of the item we want to delete from the todos array
    let newTodo = this.state.todos.filter((el, idx) => idx !== index)// returns a new array with everything BUT event  
    // console.log(el) returns each element of the todos array. combined with map function, deletes all items from list
    // console.log(idx) returns the index of each element of the todos array. combined with map function, deletes all items from list
    // console.log(index) returns the index of the element we want to delete from the todos array.
    // don't do anything to el? just writing it to get to the second argument of the filter argument
    // array.filter(function(currentValue, index))
    // array.filter((currentValue, index) => function)
    // filter's return value: A new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.
    this.setState ({
      todos : newTodo
    })
    // remove from array, using spread? filter?
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.addItem}>  {/* addItem and handleChange don't needs argument because event is default argument */}
          <label htmlFor="taskName">Task Name: </label>
          <input onChange={this.handleChange} name="taskName" type="text" placeholder="Add a todo here!" />
          <button type="submit">Add task</button>
        </form>
        <div className="list-of-todos">
          <h1>What to do today</h1>
          <ul>{this.state.todos.map((el, index) => {
            return <li><button type="button" onClick={() => this.deleteItem(index)}>delete</button> {el}</li> // switches between JS and JSX
          })} 
          {/* event is a class? event.target tell sus "<button type="text">Delete</button>" */}
          {/* HTML attributes are like props */}
          {/* why empty argument after onClick? why does deleteItem have an argument while the other functions in the render don't? */}
          </ul>
        </div>
      </div>
    )
  };
}

export default ToDoList;

// onChange={() => this.handleChange()} same as onChange={this.handleChange}

// Notes and from previous attempts

// addEvent function
  // console.log("in addItem function, event is", event) // returns SyntheticEvent
  // console.log("in addItem function, event.target is", event.target) //returns <form>...</form> JSX element
  // console.log("in addItem function, event.target.value is", event.target.value) // returns undefined
  // console.log("current this.state.todos is", this.state.todos) // returns empty array
// this.setState ({
//   todos : this.state.todos.push(this.state.currentTodo) // after 1st time, todos value becomes an interger (length of new array), and then cannot push on an interger
// })
// this.state.todos.push(this.state.currentTodo) DO NOT change state outside of setState. push changes original state

// Notes from trying to list todos
{/* map() method creates a new array with the results of calling a function for every array element. */}
{/* <li>{this.state.todos}</li> displays the array*/}
{/* <li>{this.state.todos[0]}</li> displays the first element in the array */}
{/* hard-code to display first 3 elements of the array */}
{/* <li>{this.state.todos[0]}</li>
<li>{this.state.todos[1]}</li>
<li>{this.state.todos[2]}</li> */}
{/* iterate through array to display each element */}
{/* <li>{this.state.todos[i]}</li> */}
// displayTodos = event => {
//   for (let i=0 ; i<this.state.todos.length ; i++) {
//     let currentTodo = this.state.todos[i]
//     console.log(currentTodo)
//   }
// }

// deleteItem
// let newList = this.state.todos.filter(el => {
  // el !== event}
  // ) DOESN'T WORK, because if has {}, needs a return statement
// let newList = this.state.todos.filter(el => el !== event) WORKS
