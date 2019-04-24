import React from 'react';
import Todo from './components/TodoComponents/Todo';

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
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
  

function TodoList(props) {
    return (
        <div>
            {this.state.todosOnState.map(todo => (
                <Todo todo ={todo} />
            ))}
        </div>
    )
}