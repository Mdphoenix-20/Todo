import React, { useState } from 'react';
import './App.css'; // Optional styling file

function App() {
  const [todo, setTodo] = useState(''); // Input field value
  const [todos, setTodos] = useState([]); // Array of todos

  // Add Todo Function
  const handleAddTodo = () => {
    if (todo.trim()) {
      setTodos([...todos, todo]); // Add the new todo to the list
      setTodo(''); // Clear the input field
    }
  };

  // Delete Todo Function
  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index); // Remove the todo by index
    setTodos(newTodos); // Update the state with the new array
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="todo-container">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)} // Update input value
          placeholder="Add a new task"
        />
        <button onClick={handleAddTodo}>Add</button> {/* Add Todo Button */}
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button> {/* Delete Button */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
