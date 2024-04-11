import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";

export const Home = () => {
  return (
    <>
      <NewTodoForm />
      <TodoList />
    </>
  );
};
