"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { BASE_URL } from "@/variables";

export const TodoContext = createContext({});

const TodoProvider = ({ children }: any) => {
  const [todos, setTodos] = useState([]);
  const userDataString = localStorage.getItem("userData");
  const userData = userDataString ? JSON.parse(userDataString) : null;
  const getTodos = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/todo?name=${userData.name}`);
      setTodos(res.data.todos);
      console.log(res.data.todos);
    } catch (error) {
      console.log(error);
      alert(`error ${error}`);
    }
  };

  const deleteTodo = async ({ id }: any) => {
    try {
      const res = await axios.delete(`${BASE_URL}/todo?id=${id}`);
      console.log(res);
      getTodos();
    } catch (error) {
      console.log(error);
      alert(`error ${error}`);
    }
  };

  const createTodo = async ({ task, name }: any) => {
    try {
      const res = await axios.post(`${BASE_URL}/todo`, { task, name });
      console.log(res);
      getTodos();
    } catch (error) {
      console.log(error);
      alert(`error ${error}`);
    }
  };

  const editTodo = async ({ todo }: any) => {
    try {
      const res = await axios.put(`${BASE_URL}/todo`, todo);
      console.log(res);
      getTodos();
    } catch (error) {
      console.log(error);
      alert(`error ${error}`);
    }
  };

  return (
    <TodoContext.Provider
      value={{ getTodos, todos, setTodos, deleteTodo, createTodo, editTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
