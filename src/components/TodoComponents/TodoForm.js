import React from 'react';

function TodoForm(props) {

    
    return (
        <form onSubmit = {props.addTodo}>
            <input 
                placeholder ="...todo" 
                value={props.todo}
                onChange={props.handleChanges}
            />

            <button onClick = {props.addTodo} > Add Todo </button>
            <button onClick = {props.removeCompleted} >Clear Completed</button>
        </form>
    );
}

export default TodoForm;