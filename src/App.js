/* jshint esversion: 9 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import Todo from "./components/TodoComponents/Todo.css";


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
  this.deleteItem = this.deleteItem.bind(this);

}


//toggle
toggleItem =  id => {
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
     task: itemName,
     id: Date.now(),
     completed: false
   };
   this.setState({
     todoList: [...this.state.todoList, newItem]
   });
 };

// remove item
//  deleteItem = id => {
//    this.setState({
//            todoList: this.state.todoList.filter(i => i !== id)
//  });
// };


// deleteItem = item => {
//     //either use filter
//     const { todoList } = this.state;
//     const newTodos = todoList.filter(item === true);
//     this.setState({ todoList: newTodos});
// };

deleteItem = id => {
    this.setState({
      todoList: this.state.todoList.filter(
        item => item.completed !== true,
      ),
    });

  };




  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    console.log("rendering...");
    return (
      <div className={'app'}>
      <div className="App">
          <h1>To-do List:</h1>
          <TodoForm addItem={this.addItem} />

        </div>
        <TodoList
          todo={this.state.todoList}
          toggleItem={this.toggleItem}
          deleteItem={this.deleteItem}
        />
        </div>

    );
  }
}

export default App;
