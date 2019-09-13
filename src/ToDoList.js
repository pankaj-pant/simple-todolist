import React, { useState } from 'react';

const ToDoList = () => {
    const [desc, setDesc] = useState({ dates: '', description: '' });
    const [todos, setTodos] = useState([]);

    const inputChanged = (event) => {
        setDesc({
            ...desc,
            [event.target.name]: event.target.value
        });
    }

    const addTodo = (event) => {
        event.preventDefault();
        setTodos([...todos, desc]);
        setDesc({ dates: "", description: "" });
    }

    return (
        <div>
            <h1>Simple ToDoList</h1>
            <form onSubmit={addTodo}>
                <fieldset>
                    <legend>Add Todo:</legend>
                    <label>Date: </label>
                    <input type="date" name="dates" value={desc.dates} onChange={inputChanged} />
                    <label>Description: </label>
                    <input type="text" name="description" value={desc.description} onChange={inputChanged} />
                    <input type="submit" value="Add" />
                </fieldset>
            </form>
            <table>
                <tbody>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                    </tr>
                    {todos.map(todo =>
                        <tr>
                            <td>{todo.dates}</td>
                            <td>{todo.description}</td>
                        </tr>
                    )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ToDoList;