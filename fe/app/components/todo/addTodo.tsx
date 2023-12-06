"use client";
import React, { useState } from "react";

const AddTodo = ({ userData, createTodo }: any) => {
  const [todoTask, setTodoTask] = useState("");
  return (
    <div className="flex justify-between py-1 h-[50px] w-[100%]">
      <input
        onChange={(e: any) => {
          setTodoTask(e.target.value);
        }}
        className="w-[90%] rounded-md ps-2 text-black"
        placeholder="Write new to-do"
        value={todoTask}
      />
      <button
        className="w-[30px] bg-blue-200 rounded-md text-2xl"
        onClick={() => {
          if (todoTask === "") {
            alert("ymaa bicheechheeeee !!!");
          } else {
            createTodo({ task: todoTask, name: userData.userName });
            setTodoTask("");
          }
        }}
      >
        +
      </button>
    </div>
  );
};

export default AddTodo;
