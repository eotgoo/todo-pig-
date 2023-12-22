"use client";
import React, { useContext, useEffect, useState } from "react";
import AddTodo from "./addTodo";
import Todos from "./todos";
import { TodoContext } from "@/context/todoContext";

const Todo = ({ userData }: any) => {
  const { todos, setTodos, getTodos, deleteTodo, createTodo, editTodo }: any =
    useContext(TodoContext);

  useEffect(() => {
    getTodos();
  }, [userData.userName]);

  return (
    <>
      <h1 className="text-5xl font-bold text-[#2F4F4F] ">To-do list</h1>
      <p className="text-[#2F4F4F]">Simple App to manage your daily to-do</p>
      <div className=" flex flex-col gap-4 items-center bg-[#7FB3D5] w-[400px] h-[75%] rounded-lg p-4 border-[#A9A9A9] border-2">
        <AddTodo createTodo={createTodo} userData={userData} />
        <Todos
          todos={todos}
          setTodos={setTodos}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      </div>
    </>
  );
};

export default Todo;
