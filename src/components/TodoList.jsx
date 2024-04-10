import { useEffect } from "react";
import { useTodos } from "../contexts/TodosContext";
import { TodoItem } from "./TodoItem";
import "./TodoList.css";
import icon from "../assets/pencil-solid.svg";

export const TodoList = () => {
  const { todos, countCompleted, clearTodoList, toggleCompleteAll, allBtnText, updateButtonStatus } = useTodos();

  const completedTodos = countCompleted();
  useEffect(() => {
    updateButtonStatus();
  }, [todos]);

  return (
    <>
      {todos.length === 0 ? (
        <div className="icon-box">
          <img src={icon} alt="Pen icon" />
        </div>
      ) : (
        <ul className="todos-list">
          {todos.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} />;
          })}
        </ul>
      )}

      <p>Total: {todos.length} tasks</p>
      <div className="task-counter-box">
        <p>Completed: {completedTodos}</p>
        <p>Remaining: {todos.length - completedTodos}</p>
      </div>

      <div className="button-box">
        <button onClick={toggleCompleteAll} disabled={todos.length < 1}>
          {allBtnText}
        </button>
        <button onClick={clearTodoList} disabled={todos.length < 1}>
          Delete all
        </button>
      </div>
    </>
  );
};
