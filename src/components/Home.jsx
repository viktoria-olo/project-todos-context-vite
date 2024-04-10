import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";
import "./Home.css";

export const Home = () => {
  return (
    <section className="to-do-box">
      <NewTodoForm />
      <TodoList />
    </section>
  );
};
