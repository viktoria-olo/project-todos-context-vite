import { useState, createContext, useContext, useEffect } from "react";

const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    // Check if there are any tasks in localStorage
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks === null) return [];
    return JSON.parse(storedTasks);
  });

  const [todoId, setTodoId] = useState(crypto.randomUUID()); // Get a random id number
  const [allBtnText, setAllBtnText] = useState("Complete all");

  const addTodo = (newTodo) => {
    setTodos((currentTodos) => {
      return [...currentTodos, { id: todoId, text: newTodo, completed: false }];
    });
    setTodoId(crypto.randomUUID());
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

  const deleteTodo = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  };

  const countCompleted = () => {
    const completedTodos = todos.filter((todo) => todo.completed).length;
    return completedTodos;
  };

  const updateButtonStatus = () => {
    const completedTodos = countCompleted();
    if (completedTodos === todos.length) {
      setAllBtnText("Complete none");
    } else {
      setAllBtnText("Complete all");
    }
  };

  const toggleCompleteAll = () => {
    setTodos((currentTodos) => {
      // completionStatus is either true or false depending on the allBtnText
      const completionStatus = allBtnText === "Complete all";
      // if true: set allBtnText to "Complete none", if false: set to "Complete all"
      setAllBtnText(completionStatus ? "Complete none" : "Complete all");
      return currentTodos.map((todo) => ({
        ...todo,
        completed: completionStatus, // sets true or false depending on completedStatus
      }));
    });
  };

  const clearTodoList = () => {
    setTodos([]);
  };

  return (
    <TodosContext.Provider
      value={{
        todos,
        allBtnText,
        addTodo,
        toggleTodo,
        deleteTodo,
        countCompleted,
        clearTodoList,
        toggleCompleteAll,
        updateButtonStatus,
      }}
    >
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
