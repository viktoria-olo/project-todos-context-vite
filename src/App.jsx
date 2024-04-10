import { NewTodoForm } from "./components/NewTodoForm";
import { TodoList } from "./components/TodoList";
import { TodosProvider } from "./contexts/TodosContext";

export const App = () => {
  return (
    <>
      <TodosProvider>
        <div className="content-container">
          <NewTodoForm />
          <TodoList />
        </div>
      </TodosProvider>
    </>
  );
};
