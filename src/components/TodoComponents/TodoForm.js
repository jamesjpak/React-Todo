import React from 'react';

function TodoForm(props) {
    return (
        <div onSubmit = {props.addTodo} >
            <input 
                placeholder ="...todo" 
                value={props.todo}
                onChange={props.handleChanges}
                task="task"
            />

            <button>Add Todo</button>
            <button>Clear Completed</button>
        </div>
    );
}

export default TodoForm;