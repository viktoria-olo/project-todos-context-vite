import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";


export const Home = () => {
  return (
    <div className="content-container">
      <NewTodoForm />
      <TodoList />
    </div>
  );
}
