"use client";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faX, faCheck } from "@fortawesome/free-solid-svg-icons";

const Todos = ({ todos, setTodos }: any) => {
  return (
    <div className="flex flex-col gap-2 h-[80%] w-[100%] py-2 overflow-y-scroll">
      {todos.map((todo: any, index: any) => (
        <div className="bg-[white] text-black min-h-[45px]  rounded-md overflow-hidden flex justify-between">
          <div className=" h-full w-[80%] flex items-center ps-3">
            {todo.checked === true ? (
              <p
                style={{
                  textDecoration: todo.checked ? "line-through" : "",
                  padding: "5px",
                }}
              >
                {todo.text}
              </p>
            ) : (
              <input
                style={{ width: "100%" }}
                value={todo.text}
                onChange={(e) => {
                  let todoCopy = [...todos];
                  todoCopy[index].text = e.target.value;
                  setTodos(todoCopy);
                }}
              />
            )}
          </div>
          <div className="h-full w-[20%] flex justify-around items-center gap-3 px-3">
            <button
              className=" flex-1"
              onClick={() => {
                let todoCopy = [...todos];
                todoCopy[index].checked = !todoCopy[index].checked;
                setTodos(todoCopy);
              }}
            >
              <FontAwesomeIcon
                icon={todo.checked ? faX : faCheck}
                style={{ color: "green" }}
              />
            </button>
            {/* <button className=" flex-1">
              <FontAwesomeIcon icon={faPencil} style={{ color: "black" }} />
            </button> */}
            <button
              className=" flex-1"
              onClick={() => {
                const todoCopy = [...todos];

                todoCopy.splice(index, 1);

                setTodos(todoCopy);
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
