import React from "react";
import useTodo from "../contexts/Context";
import { useState } from "react";

function TodoForm() {
  const [todoMsg, setTodoMsg] = useState('');
  const {addTodo} = useTodo();

  const handleAdd = function() {
    if (todoMsg.length > 0)
    addTodo(todoMsg);
  else alert('Enter a Valid String');
    setTodoMsg('');
  }

  return (
    <>
      <div className="bg-gray-600/70 flex justify-around p-4 rounded-xl items-center gap-x-5 w-screen max-w-2xl">
        <input
          className="w-10/12 rounded-lg px-4 py-2 placeholder:text-gray-400 placeholder:font-medium border-3 border-black"
          type="text"
          placeholder="TODO"
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.currentTarget.value)}
        ></input>
        <button className="bg-white text-black border-black border-2 rounded-lg px-3 py-2 font-semibold text-lg hover:border-white hover:bg-black hover:text-white duration-200" onClick={handleAdd}>
          Add
        </button>
      </div>
    </>
  );
}

export default TodoForm;
