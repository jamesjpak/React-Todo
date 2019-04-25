import React from 'react';
import Todo from "./Todo"

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js


function TodoList(props) {
    return (
        <div>
            {props.todosOnState.map(todo => (
                <Todo key ={todo.id} todo ={todo} />
            ))}
        </div>
    )
}

export default TodoList;