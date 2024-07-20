import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";
import { TodoContextProvider } from "./contexts/Context";
import { useEffect } from "react";
import bg_img from "./assets/skyline.jpg";

function App() {
  const [todoInfo, setTodoInfo] = useState([]);

  function addTodo(todoMsg) {
    const obj = {
      id: Date.now(),
      msg: todoMsg,
      completed: false,
    };
    setTodoInfo((prev) => [obj, ...prev]);
  }

  function deleteTodo(id) {
    setTodoInfo((prev) => {
      return prev.filter((pr) => pr.id !== id);
    });
  }

  function editTodo(id, msg) {
    setTodoInfo((prev) => {
      const temp = [...prev];
      const index = temp.findIndex((pr) => pr.id === id);
      if (index !== -1) {
        temp[index].msg = msg;
      }
      return temp;
    });
  }

  /*
  Sure, here's a boiled-down summary for future reference:

1. **Immutability in State Updates:** Always update state immutably in React to ensure predictable component rendering and state management.

2. **Functional Updates:** Use functional updates (`setState((prev) => ...)` syntax) when updating state based on previous state. This helps in avoiding stale state references.

3. **Avoid Immediate State Dependency in Logs:** React's state updates are asynchronous, so avoid depending on state values immediately after setting state (`console.log`, etc.). Use `useEffect` with state dependencies to log updated state values reliably.

4. **Predictable Rendering:** Ensure state updates trigger re-renders correctly by updating state immutably and handling state dependencies effectively.

By following these principles, you'll maintain clean and efficient state management practices in your React applications.
  */

  // use this approach, create new changes

  function toggleComplete(id) {
    setTodoInfo((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    });
  }

  // in useffect if there is an empty array, then it runs once, if it no array, it runs everytime

  useEffect(() => {
    const todoInfo = JSON.parse(localStorage.getItem("todoInfo"));

    if (todoInfo && todoInfo.length > 0) {
      setTodoInfo(todoInfo);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoInfo", JSON.stringify(todoInfo));
  }, [todoInfo]);

  return (
    <TodoContextProvider
      value={{ todoInfo, addTodo, deleteTodo, editTodo, toggleComplete }}
    >
      <div
        className="w-screen h-screen bg-cover flex justify-center items-center flex-col overflow-x-hidden overflow-y-scroll scrollbar-none"
        style={{ backgroundImage: `url(${bg_img})` }}
      >
        <div className="flex justify-center items-center flex-col gap-y-2">
          <TodoForm />
          <div className="flex flex-col items-center container__self">
            {todoInfo.map((td) => {
              return (
                <div key={td.id} className="w-full">
                  <Todo todoInfo={td} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
