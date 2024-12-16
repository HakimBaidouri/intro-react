import React, { useState, useEffect } from "react";
import './App.css'
import Header from './Header'
import Form from './Form'
import Todo_list from './Todo_list'
import ThemeToggle from './ThemeToggle'

const LSKEY = "MyTodoApp";
const THEME_KEY = "MyTodoAppTheme";

function App() {

  // État du thème
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = window.localStorage.getItem(THEME_KEY);
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  // Initialisation des todos depuis le localStorage ou valeurs par défaut
  const [todos, setTodos] = useState(() => {
    const savedTodos = window.localStorage.getItem(LSKEY);
    return savedTodos
      ? JSON.parse(savedTodos)
      : [
          { id: 0, message: "My first todo", statue: "As not done" },
          { id: 1, message: "My second todo", statue: "As not done" }
        ];
  });

  // Fonction pour ajouter un nouveau todo
  const addTodo = (todoMessage) => {
    const newTodo = {
      id: Date.now(),
      message: todoMessage,
      statue: "As not done"
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  // Fonction pour gérer le changement d'état des checkboxes
  const handleCheckboxChange = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              statue: todo.statue === "As done" ? "As not done" : "As done"
            }
          : todo
      )
    );
  };

  // Effet pour mettre à jour l'attribut data-theme sur le document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    window.localStorage.setItem(THEME_KEY, JSON.stringify(isDark));
  }, [isDark]);

  // Fonction pour basculer le thème
  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  // Mettre à jour le localStorage à chaque changement de l'état todos
  useEffect(() => {
    window.localStorage.setItem(LSKEY, JSON.stringify(todos));
  }, [todos]); // Dépendance sur todos

  return (
    <div className="container">
      <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      <Header />
      <Form addTodo={addTodo} />
      <Todo_list todos={todos} handleCheckboxChange={handleCheckboxChange} />
    </div>
  );
}

export default App;
