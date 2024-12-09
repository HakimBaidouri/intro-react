const Form = () => {
    return (
        <div className="Todo-form">
            <form action="">
                <input type="text" name="Todo" placeholder="Type a new todo" />
                <br />
                <button type="submit" className="Add-todo">Add Todo</button>
            </form>
        </div>
    )
}

export default Form