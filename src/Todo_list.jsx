import React, { useState } from "react";

const Todo_list = ({todos, handleCheckboxChange}) => {

    return (
        <div className="todo-container">
            <h2>My Tasks</h2>
            <ul className="todo-list">
                {todos.map((todo) => (
                    <li 
                        key={todo.id} 
                        className={`todo-item ${todo.statue === "As done" ? "completed" : ""}`}
                    >
                        <input
                            type="checkbox"
                            id={`todo-${todo.id}`}
                            checked={todo.statue === "As done"}
                            onChange={() => handleCheckboxChange(todo.id)}
                        />
                        <span>{todo.message}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todo_list;
