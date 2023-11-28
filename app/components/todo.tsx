"use client";
import React, { useState } from "react";
import AddTodo from "./addTodo";
import Todos from "./todos";

const Todo = () => {
  const [todos, setTodos] = useState([
    { text: "Aygaa ugaah", checked: false },
    { text: "Hicheel hiih", checked: true },
  ]);
  return (
    <div
      className=" flex flex-col gap-4 items-center bg-gradient-to-tr from-[#96EFFF] to-[#5FBDFF] w-[400px] h-[75%] rounded-lg p-4"
      //   style={{ boxShadow: "0px 0px 50px 0px #C5FFF8" }}
    >
      <AddTodo setTodos={setTodos} />
      <Todos todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Todo;
