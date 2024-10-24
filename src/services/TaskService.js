import axios from "axios";

const API_URL = "http://localhost:5018/api/TodoItems"; // Update with your actual API URL

// Get all todo items
export const getTodoItems = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching todo items:", error);
    throw error;
  }
};

// Get a single todo item by ID
export const getTodoItem = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching todo item with ID ${id}:`, error);
    throw error;
  }
};

// Create a new todo item
export const createTodoItem = async (todoItem) => {
  try {
    const response = await axios.post(API_URL, todoItem);
    return response.data;
  } catch (error) {
    console.error("Error creating todo item:", error);
    throw error;
  }
};

// Update an existing todo item
export const updateTodoItem = async (id, updatedItem) => {
  try {
    await axios.put(`${API_URL}/${id}`, updatedItem);
  } catch (error) {
    console.error(`Error updating todo item with ID ${id}:`, error);
    throw error;
  }
};

// Delete a todo item
export const deleteTodoItem = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error(`Error deleting todo item with ID ${id}:`, error);
    throw error;
  }
};
