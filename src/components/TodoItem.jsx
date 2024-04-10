import { useTodos } from "../contexts/TodosContext";
import "./TodoItem.css";

export const TodoItem = ({ todo }) => {
  const { toggleTodo, deleteTodo } = useTodos();

  return (
    <li>
      <input
        id={todo.id}
        type="checkbox"
        checked={todo.completed}
        onChange={(event) => toggleTodo(todo.id, event.target.checked)}
      />
      <label htmlFor={todo.id}>{todo.text}</label>

      <button onClick={() => deleteTodo(todo.id)} className="delete-button">
        Delete
      </button>
    </li>
  );
};
