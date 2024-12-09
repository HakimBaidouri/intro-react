import React, { useState } from "react";

const CheckboxForm = () => {
    const initialTodos = [
        { id: 0, message: "My first todo", statue: "As not done" },
        { id: 1, message: "My second todo", statue: "As not done" }
    ];

    const [todos, setTodos] = useState(initialTodos);

    // Fonction pour gérer les changements de checkbox
    const handleCheckboxChange = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id
                    ? { ...todo, statue: todo.statue === "As done" ? "As not done" : "As done" }
                    : todo
            )
        );
    };

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

export default CheckboxForm;
