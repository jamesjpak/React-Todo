import React from 'react';
import ToDoForm from './components/TodoComponents/TodoForm';
import ToDoList from './components/TodoComponents/TodoList';


const todos = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
 
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {

      inputField: '',

      todo: todos

    };
  }

  handleChanges = event => {
    this.setState({
      inputField: event.target.value
    });
  };

  addTodo = event => {
    event.preventDefault();


    this.setState( {
      todo:[...this.state.todo, { task: this.state.inputField, id: Date.now(), completed: false } ],
      inputField:'' 
     });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>

        <ToDoList todosOnState={this.state.todo} />
      
        <ToDoForm addTodo={this.addTodo} todo={this.state.inputField} handleChanges={this.handleChanges} />

      </div>
    );
  }
}

export default App;
