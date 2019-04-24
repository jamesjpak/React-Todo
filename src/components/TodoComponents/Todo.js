import React from 'react';

function Todo(props) {
    return (
        <div>
            <h1>{props.todo.name}</h1>
        </div>
    );
}

export default Todo;