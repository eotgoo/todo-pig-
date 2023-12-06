"use client";
import React, { useContext, useState } from "react";
import Todo from "../components/todo/todo";
import LoginPage from "../components/login/loginPage";

import { UserContext } from "@/context/userContext";

const Home = () => {
  const { isLogged, setIsLogged, userData, setUserData, logIn }: any =
    useContext(UserContext);
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-4 bg-[#F5F5F5]">
      {isLogged ? (
        <Todo userData={userData} setUserData={setUserData} />
      ) : (
        <LoginPage
          logIn={logIn}
          setIsLogged={setIsLogged}
          setUserData={setUserData}
          userData={userData}
        />
      )}
    </div>
  );
};

export default Home;
