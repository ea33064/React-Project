// import React, { useState } from "react";

// const Todos = () => {
//   const [todos, setTodos] = useState([]);

//   const addTodo = (text) => {
//     setTodos([...todos, { id: todos.length + 1, text, completed: false }]);
//   };

//   const toggleCompleted = (id) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo,
//       ),
//     );
//   };

//   const deleteTodo = (id) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   return (
//     <div id="todos">
//       <h1>Todos</h1>
//       <form id="add-todo-form">
//         <input type="text" id="new-todo" placeholder="Add a new task..." />
//         <button
//           type="button"
//           onClick={() => addTodo(document.getElementById("new-todo").value)}
//         >
//           Add
//         </button>
//       </form>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             <div className="todo-text">
//               {todo.completed ? (
//                 <del>{todo.text}</del>
//               ) : (
//                 <span>{todo.text}</span>
//               )}
//               <button type="button" onClick={() => toggleCompleted(todo.id)}>
//                 {todo.completed ? "Mark as incomplete" : "Mark as complete"}
//               </button>
//             </div>
//             <button type="button" onClick={() => deleteTodo(todo.id)}>
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Todos;

import React, { useState, useRef, useCallback, useMemo } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const newTodoRef = useRef(null);

  const addTodo = useCallback((text) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: prevTodos.length + 1, text, completed: false },
    ]);
  }, []);

  const toggleCompleted = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const memoizedTodos = useMemo(() => todos, [todos]);

  return (
    <div id="todos">
      <h1>Todos</h1>
      <form id="add-todo-form">
        <input
          type="text"
          id="new-todo"
          placeholder="Add a new task..."
          ref={newTodoRef}
        />
        <button
          type="button"
          title="Add a new task"
          onClick={() => addTodo(newTodoRef.current.value)}
        >
          Add
        </button>
      </form>
      <ul>
        {memoizedTodos.map((todo) => (
          <li key={todo.id}>
            <div className="todo-text">
              {todo.completed ? (
                <del>{todo.text}</del>
              ) : (
                <span>{todo.text}</span>
              )}
              <button
                type="button"
                title={`Mark as ${todo.completed ? "incomplete" : "complete"}`}
                onClick={() => toggleCompleted(todo.id)}
              >
                {todo.completed ? "Mark as incomplete" : "Mark as complete"}
              </button>
            </div>
            <button
              type="button"
              title="Delete this task"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
