import { useState } from 'react';

import Todo from "./componets/Todo";
import TodoForm from "./componets/TodoForm";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir paraa a academia",
      category: "pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "estudo",
      isCompleted: false,
    },
  ]);

  const addTodo = (text, category) => {

    const newTodos =[
      ...todos,
       {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
     },
    ];

    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter((todo) =>
       todo.id !==id ? todo :null
    );
    setTodos(filteredTodos);
  };

  const completeTodo = (id) =>{
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="todos-list">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
        ))}
      </div>
      <hr></hr>
      <TodoForm addTodo={addTodo}/>
    </div>
  );
};

export default App
