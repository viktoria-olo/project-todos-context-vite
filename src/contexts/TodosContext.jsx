import { useState, createContext, useContext } from "react";

const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos((currentTodos) => {
      [...currentTodos, newTodo];
    });
  };

  return (
    <TodosContext.Provider value={{ todos, addTodo }}>
      {children}
    </TodosContext.Provider>
  );
};

export const useTodos = () => {
  const context = useContext(TodosContext);
  if (!context) {
    throw new Error("useTodos must be used within a TodosProvider");
  }
  return context;
};
