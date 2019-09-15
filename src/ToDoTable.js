import React from 'react'

const ToDoTable = (props) => {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                    </tr>
                    {props.todos.map((todo, index) =>
                        <tr key={index}>
                            <td>{todo.dates}</td>
                            <td>{todo.description}</td>
                            <td>
                                <button onClick={props.deleteButton} id={index}>Delete</button>
                            </td>
                        </tr>
                    )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ToDoTable;