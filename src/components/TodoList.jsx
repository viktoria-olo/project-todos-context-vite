import { useTodos } from "../contexts/TodosContext";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const { todos, countCompleted, clearTodoList, completeAll } = useTodos();

  const completedTodos = countCompleted();

  return (
    <>
      <ul className="todos-list">
        {todos.length === 0 && "No to dos"}
        {todos.map((todo) => {
          return <TodoItem todo={todo} />;
        })}
      </ul>
      <p>Total: {todos.length} todos</p>
      <p>Completed: {completedTodos}</p>
      <p>Remaining: {todos.length - completedTodos}</p>
      <button onClick={completeAll}>Complete all</button>
      <button onClick={clearTodoList}>Clear all</button>
    </>
  );
};
