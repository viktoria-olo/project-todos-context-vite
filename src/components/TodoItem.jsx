import { useTodos } from "../contexts/TodosContext";

export const TodoItem = ({ todo }) => {
  const { toggleTodo } = useTodos();

  return (
    <li>
      <label key={todo.id}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(event) => toggleTodo(todo.id, event.target.checked)}
        />
        {todo.text}
      </label>
    </li>
  );
};
