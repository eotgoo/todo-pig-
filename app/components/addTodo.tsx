"use client";
import React, { useState } from "react";

const AddTodo = ({ setTodos }: any) => {
  const [todoText, setTodoText] = useState("");
  return (
    <div className="flex justify-between py-1 h-[50px] w-[100%]">
      <input
        onChange={(e: any) => {
          setTodoText(e.target.value);
        }}
        className="w-[90%] rounded-md ps-2 text-black"
        placeholder="Write new to-do"
        value={todoText}
      />
      <button
        className="w-[30px] bg-blue-200 rounded-md text-2xl"
        onClick={() => {
          if (todoText === "") {
            alert("ymaa bicheechheeeee !!!");
          } else {
            setTodos((prev: any) => [
              ...prev,
              { text: todoText, checked: false },
            ]);
            setTodoText("");
          }
        }}
      >
        +
      </button>
    </div>
  );
};

export default AddTodo;
