import React, { useRef } from "react"

const Form = ({ addTodo }) => {
    const inputRef = useRef();

    function handleSubmit (event) {
        event.preventDefault();
        const inputElement = inputRef.current;

        if(inputElement.value.trim()){
            addTodo(inputElement.value);
            inputElement.value = "";
        }
    }
    
    return (
        <div className="Todo-form">
            <form onSubmit={handleSubmit}>
                <input type="text" name="Todo" placeholder="Type a new todo" ref={ inputRef }/>
                <br />
                <button type="submit" className="Add-todo">Add Todo</button>
            </form>
        </div>
    )
}

export default Form