"use client";
import React, { useState } from "react";
import AddTodo from "./addTodo";
import Todos from "./todos";

const Todo = ({ loggedUser, setLoggedUser }: any) => {
  const [todos, setTodos] = useState([
    { text: "Aygaa ugaah", checked: false },
    { text: "Hicheel hiih", checked: true },
  ]);
  return (
    <>
      <h1 className="text-5xl font-bold text-[#2F4F4F] ">To-do list</h1>
      <p className="text-[#2F4F4F]">{loggedUser.userName}</p>
      <p className="text-[#2F4F4F]">Simple App to manage your daily to-do</p>
      <div className=" flex flex-col gap-4 items-center bg-[#7FB3D5] w-[400px] h-[75%] rounded-lg p-4 border-[#A9A9A9] border-2">
        <AddTodo setTodos={setTodos} />
        <Todos todos={todos} setTodos={setTodos} />
      </div>
    </>
  );
};

export default Todo;
