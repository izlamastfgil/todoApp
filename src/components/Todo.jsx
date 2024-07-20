import React from "react";
import { useState } from "react";
import useTodo from "../contexts/Context";

function Todo({ todoInfo }) {
  const [edit, setEdit] = useState(false);
  const [msg, setMsg] = useState(todoInfo?.msg);
  const { deleteTodo, editTodo, toggleComplete } = useTodo();

  const handleEdit = () => {
    setEdit((prev) => !prev);
    editTodo(todoInfo.id, msg);
  };

  const handleToggleComplete = () => {
    toggleComplete(todoInfo.id);
  };

  const text_toDo_Done = "line-through text-gray-400";

  return (
    <div className="bg-gray-600/40 p-4 py-5 w-screen max-w-1.5xl text-xl text-white rounded-lg border-gray-400 border-1 my-2 flex justify-around gap-x-2.5 items-center flex-1">
      <input
        className="accent-red-500 scale-125 align-baseline cursor-pointer"
        type="checkbox"
        defaultChecked={todoInfo.completed}
        onChange={handleToggleComplete}
      ></input>
      <input
        className={`w-full  rounded-lg ${
          !edit ? "bg-transparent cursor-default" : "bg-gray-400/20 cursor-text"
        } px-3 py-2 text-white outline-none ${
          todoInfo.completed ? text_toDo_Done : ""
        }`}
        type="text"
        value={msg}
        readOnly={!edit}
        onChange={(e) => setMsg(e.currentTarget.value)}
      ></input>
      <button
        className={` px-2 py-0.5 text-lg align-text-top text-black rounded-lg shadow-lg font-medium hover:bg-gray-500 duration-200 ${
          todoInfo.completed ? "bg-gray-500" : "bg-gray-300"
        }`}
        onClick={handleEdit}
        disabled={todoInfo.completed}
      >
        {!edit ? "Edit" : "Save"}
      </button>
      <button
        className={`bg-gray-300 px-2 py-0.5 text-lg align-text-top text-black rounded-lg shadow-lg font-medium hover:bg-gray-500 duration-200 ${
          todoInfo.completed ? "bg-gray-500" : "bg-gray-300"
        }`}
        onClick={() => {
          deleteTodo(todoInfo.id);
        }}
        disabled={todoInfo.completed}
      >
        Delete
      </button>
    </div>
  );
}

export default Todo;
