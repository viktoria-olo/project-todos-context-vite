import { useState, createContext, useContext } from "react";

const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [todoId, setTodoId] = useState(1);
  const [allBtnText, setAllBtnText] = useState("Complete all");

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

  const deleteTodo = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  };

  const countCompleted = () => {
    return todos.filter((todo) => todo.completed).length;
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
  // However, if one manually checks all the boxes, the button text does not change.
  // Tried to solve it by checking if the length of completed todos is the same as the total todo list
  // and if that were the case changing the button text. But have not gotten it to work yet

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
