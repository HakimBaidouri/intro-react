const Checkbox_form = () => {
    return (
        <div className="Radio-form">
            <h2>Todos</h2>
            <form action="">
                <label htmlFor="">
                    <input type="checkbox" name="Todo" /> 
                    Learn React
                </label>
                <br />
                <label htmlFor="">
                    <input type="checkbox" name="Todo" /> 
                    Be Awesome!
                </label>
            </form>
        </div>
    )
}

export default Checkbox_form