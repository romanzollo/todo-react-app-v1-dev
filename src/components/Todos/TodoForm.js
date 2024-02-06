import { useState } from 'react';

function TodoForm({ addTodo }) {
    const [value, setValue] = useState('');

    function submitFormHandler(event) {
        event.preventDefault();
        addTodo(value);
        setValue('');
    }

    return (
        <div>
            <form onSubmit={submitFormHandler}>
                <input
                    type="text"
                    placeholder="Enter new todo"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default TodoForm;
