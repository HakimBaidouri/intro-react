import React, { useState } from "react";

const Todo_list = ({todos, handleCheckboxChange}) => {

    return (
        <div className="Checkbox-form">
            <h2>Todos</h2>
            <form>
                {todos.map((todo) => (
                    <label key={todo.id} htmlFor={`todo-${todo.id}`}>
                        <input
                            type="checkbox"
                            id={`todo-${todo.id}`}
                            checked={todo.statue === "As done"}
                            onChange={() => handleCheckboxChange(todo.id)} // Met à jour le statut
                        />{" "}
                        {todo.message}
                        <br />
                    </label>
                ))}
            </form>
        </div>
    );
};

export default Todo_list;
