import { useTodos } from "../contexts/TodosContext";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const { todos } = useTodos();

  return (
    <ul className="todos-list">
      {todos.length === 0 && "No to dos"}
      {todos.map((todo) => {
        return <TodoItem todo={todo} />;
      })}
    </ul>
  );
};
