import { useState, createContext, useContext } from "react";

const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [todoId, setTodoId] = useState(1);

  const addTodo = (newTodo) => {
    setTodos((currentTodos) => {
      return [...currentTodos, { id: todoId, text: newTodo, completed: false }];
    });
    setTodoId(todoId + 1);
  };

  const toggleTodo = (id, completed) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  };

  return (
    <TodosContext.Provider value={{ todos, addTodo, toggleTodo }}>
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
