// src/components/TodoList.js
import React, { useState, useEffect } from "react";
import {
  getTodoItems,
  createTodoItem,
  updateTodoItem,
  deleteTodoItem,
} from "../services/TaskService";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    // Fetch todo items when component mounts
    const fetchTodos = async () => {
      try {
        const data = await getTodoItems();
        setTodos(data);
      } catch (error) {
        console.error("Error fetching todo items:", error);
      }
    };
    fetchTodos();
  }, []);

  const handleCreateTodo = async () => {
    if (newTodo) {
      try {
        const createdTodo = await createTodoItem({ name: newTodo });
        setTodos([...todos, createdTodo]);
        setNewTodo("");
      } catch (error) {
        console.error("Error creating todo item:", error);
      }
    }
  };

  const handleUpdateTodo = async (id, updatedName) => {
    try {
      await updateTodoItem(id, { id, name: updatedName });
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, name: updatedName } : todo
        )
      );
    } catch (error) {
      console.error("Error updating todo item:", error);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodoItem(id);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Error deleting todo item:", error);
    }
  };

  return (
    <div className="task-list">
      <h2 className="header">Todo List</h2>
      <div className="task-input">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new todo"
        />
        <button onClick={handleCreateTodo}>Add Todo</button>
      </div>
      <ul className="task-list-items">
        {todos.map((todo) => (
          <li key={todo.id} className="task-item">
            {todo.name}
            <button
              className="delete-button"
              onClick={() => handleDeleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
