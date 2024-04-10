import { useTodos } from "../contexts/TodosContext";
import "./TodoItem.css";

export const TodoItem = ({ todo }) => {
  const { toggleTodo, deleteTodo } = useTodos();

  return (
    <li className="checkbox-container">
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(event) => toggleTodo(todo.id, event.target.checked)}
        />
        {todo.text}
      </label>

      <button onClick={() => deleteTodo(todo.id)} className="delete-button">
        Delete
      </button>
    </li>
  );
};
