import React from "react";
import Todo from "../components/todo";

const Home = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-4 bg-[#0]">
      <h1 className="text-5xl font-bold ">To-do list</h1>
      <p>Simple App to manage your daily to-do</p>
      <Todo />
    </div>
  );
};

export default Home;
