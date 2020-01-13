/* jshint esversion: 9 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';


const todo = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
constructor() {
  super();
  this.state = {
    todoList: todo,
  };
}


//toggle
toggleItem = id => {
  // find the item we clicked on
  // toggle the purchased field
  // update state with the new grocery data
  const newTodoList = this.state.todoList.map(item => {
    if (item.id === id) {
      return {
        ...item,
        completed: !item.completed
      };
    } else {
      return item;
    }
  });


  //update
  this.setState({
    todoList: newTodoList
  });

}

//add todo item
addItem = itemName => {
   const newItem = {
     name: itemName,
     id: Date.now(),
     completed: false
   };
   this.setState({
     todoList: [...this.state.todoList, newItem]
   });
 };


  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    console.log("rendering..");
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
