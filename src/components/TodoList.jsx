import { useEffect } from "react";
import { useTodos } from "../contexts/TodosContext";
import { TodoItem } from "./TodoItem";
import "./TodoList.css";

export const TodoList = () => {
  const { todos, countCompleted, clearTodoList, toggleCompleteAll, allBtnText, updateButtonStatus } = useTodos();

  const completedTodos = countCompleted();
  useEffect(() => {
    updateButtonStatus();
  }, [todos]);

  return (
    <div className="list-container">
      <ul className="todos-list">
        {todos.length === 0 && "No tasks"}
        {todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })}
      </ul>
      <div className="totals-div">
        <p>Total: {todos.length} tasks</p>
        <p>Completed: {completedTodos}</p>
        <p>Remaining: {todos.length - completedTodos}</p>
      </div>
      <div className="button-div">
        <button onClick={toggleCompleteAll} disabled={todos.length < 1}>
          {allBtnText}
        </button>
        <button onClick={clearTodoList} disabled={todos.length < 1}>
          Delete all
        </button>
      </div>
    </div>
  );
};
