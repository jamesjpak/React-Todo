import React from 'react';

function TodoForm(props) {
    return (
        <div >
            <input 
                placeholder ="...todo" 
                value={props.todo}
                onChange={props.handleChanges}
            />

            <button onClick = {props.addTodo}> Add Todo </button>
            <button>Clear Completed</button>
        </div>
    );
}

export default TodoForm;