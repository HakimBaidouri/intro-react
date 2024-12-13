import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Form from './Form'
import Todo_list from './Todo_list'

function App() {
  const initialTodos = [
    { id: 0, message: "My first todo", statue: "As not done" },
    { id: 1, message: "My second todo", statue: "As not done" }
  ];
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (todoMessage) => {
    const newTodo = {
      id : Date.now(),
      message : todoMessage,
      statue : "As not done"
    }
    return setTodos([...todos, newTodo])
  }

  const handleCheckboxChange = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if(todo.id === id){
          return {
            id : todo.id,
            message : todo.message,
            statue : todo.statue === "As done" ? "As not done" : "As done"
          }
        } 
        return todo
      })
    );
  };

  return (
    <div className="App">
      <Header />
      <Form addTodo={addTodo}/>
      <Todo_list todos={todos} handleCheckboxChange={handleCheckboxChange}/>
    </div>
  );
}

export default App
