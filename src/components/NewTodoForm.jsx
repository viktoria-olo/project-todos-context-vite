import React, { useState } from "react";
import { useTodos } from "../contexts/TodosContext";

export const NewTodoForm = () => {
  const { addTodo } = useTodos();
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(newTask);
    setNewTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        New to do:
        <input
          type="text"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
        />
      </label>
      <button type="submit" disabled={newTask === ""}>
        Add new to do
      </button>
    </form>
  );
};
