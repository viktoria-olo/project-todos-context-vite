import { useTodos } from "../contexts/TodosContext";

export const TodoItem = ({ todo }) => {
  const { toggleTodo, deleteTodo } = useTodos();

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(event) => toggleTodo(todo.id, event.target.checked)}
        />
        {todo.text}
      </label>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
};
