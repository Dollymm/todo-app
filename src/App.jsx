import React, { useState } from 'react';

const TodoList = () => {
  const [task, setTask] = useState('');
  const [todo, setTodo] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      setTodo([...todo, task]);
      setTask('');
    }
  };

  const handleDelete = (index) => {
    const newTodo = [...todo];
    newTodo.splice(index, 1);
    setTodo(newTodo);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Todo List</h1>
        <form onSubmit={handleSubmit} className="flex mb-4">
          <input
            type="text"
            value={task}
            onChange={handleChange}
            className="border rounded-l px-4 py-2 w-full"
            placeholder="Enter a new task"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-700"
          >
            Add
          </button>
        </form>
        <ul>
          {todo.map((todo, index) => (
            <li key={index} className="mb-2 flex justify-between items-center bg-gray-100 p-2 rounded shadow-sm">
              <span className="text-gray-700">{todo}</span>
              <button
                type="button"
                onClick={() => handleDelete(index)}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
