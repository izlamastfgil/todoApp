import React from "react";

const TodoContext = React.createContext({
  todoInfo: [
    {
      id: 1,
      msg: 'hello world',
      completed: false,
    }
  ],
  addTodo() {},
  deleteTodo() {},
  editTodo() {},
  toggleComplete() {},
});


export const TodoContextProvider = TodoContext.Provider;

export default function useTodo() {
  return React.useContext(TodoContext);
};