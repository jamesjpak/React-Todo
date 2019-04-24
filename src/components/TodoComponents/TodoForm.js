import React from 'react';

function TodoForm(props) {
    return (
        <div>
            <input placeholder ="...todo" />

            <button>Add Todo</button>
            <button>Clear Completed</button>
        </div>
    );
}

export default TodoForm;