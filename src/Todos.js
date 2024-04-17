import React, { useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: todos.length + 1, text, completed: false }]);
  };

  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  return (
    <div id="todos">
      <h1>Todos</h1>
      <form id="add-todo-form">
        <input type="text" id="new-todo" placeholder="Add a new task..." />
        <button
          type="button"
          onClick={() => addTodo(document.getElementById("new-todo").value)}
        >
          Add
        </button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => toggleCompleted(todo.id)}>
            {todo.completed ? <strike>{todo.text}</strike> : todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
