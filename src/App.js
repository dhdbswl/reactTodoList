import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Todolist from './components/Todolist';

function App() {
  const initState = [
    {text: "Hello World 🤩", completed: false, id: 0},
    {text: "Click the plus button to add a list.", completed: false, id: 1}
  ];
  // state stuff 
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState(initState);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // run once when the app start
  useEffect(() => {
    getLocalTodos();
  }, []);
  // use effect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  // function
  const filterHandler = () => {
    switch(status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  // save to local
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <div className="list-wrap">
        <header>
          <h1>To Do List</h1>
        </header>
        <Form
          inputText={inputText}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
          setStatus={setStatus}
        />
        <Todolist
          todos={todos}
          setTodos={setTodos}
          filteredTodos={filteredTodos}
        />  
      </div>
    </div>
  );
}

export default App;
