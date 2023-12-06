"use client";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faX,
  faCheck,
  faPen,
} from "@fortawesome/free-solid-svg-icons";

const Todos = ({ todos, setTodos, deleteTodo, editTodo }: any) => {
  return (
    <div className="flex flex-col gap-2 h-[80%] w-[100%] py-2 overflow-y-scroll">
      {todos.map((todo: any, index: any) => (
        <div
          key={todo._id}
          className="bg-[white] text-black min-h-[45px]  rounded-md overflow-hidden flex justify-between"
        >
          <div className=" h-full w-[70%] flex items-center ps-3">
            {todo.checked === true ? (
              <p
                style={{
                  textDecoration: todo.checked ? "line-through" : "",
                  padding: "5px",
                }}
              >
                {todo.task}
              </p>
            ) : (
              <input
                style={{ width: "100%" }}
                value={todo.task}
                onChange={(e) => {
                  editTodo({ todo: { id: todo._id, task: e.target.value } });
                }}
              />
            )}
          </div>
          <div className="h-full w-[30%] flex justify-around items-center gap-3 px-3">
            <button
              className=" flex-1"
              onClick={() => {
                editTodo({ todo: { id: todo._id, checked: !todo.checked } });
              }}
            >
              <FontAwesomeIcon
                icon={todo.checked ? faX : faCheck}
                style={{ color: "green" }}
              />
            </button>
            <button
              className=" flex-1"
              onClick={() => {
                // editTodo({ todo: { id: todo._id, checked: !todo.checked } });
              }}
            >
              <FontAwesomeIcon icon={faPen} style={{ color: "green" }} />
            </button>
            <button
              className=" flex-1"
              onClick={() => {
                deleteTodo({ id: todo._id });
              }}
            >
              <FontAwesomeIcon icon={faTrash} style={{ color: "red" }} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todos;
