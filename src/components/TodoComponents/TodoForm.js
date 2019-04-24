import React from 'react';

function TodoForm(props) {
    return (
        <div onSubmit = {this.addTodo} >
            <input placeholder ="...todo" />

            <button>Add Todo</button>
            <button>Clear Completed</button>
        </div>
    );
}

export default TodoForm;