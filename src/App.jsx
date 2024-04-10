import { Home } from "./components/Home";
import { TodosProvider } from "./contexts/TodosContext";
import "./App.css";

export const App = () => {
  return (
    <section className="to-do-box">
      <TodosProvider>
        <Home />
      </TodosProvider>
    </section>
  );
};
