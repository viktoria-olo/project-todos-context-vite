import { Home } from "./components/Home";
import { TodosProvider } from "./contexts/TodosContext";

export const App = () => {
  return (
    <>
      <TodosProvider>
        <Home />
      </TodosProvider>
    </>
  );
};
