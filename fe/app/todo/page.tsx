"use client";
import React, { useState } from "react";
import Todo from "../components/todo/todo";
import LoginPage from "../components/login/loginPage";

const Home = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [loggedUser, setLoggedUser] = useState(null);
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-4 bg-[#F5F5F5]">
      {isLogged ? (
        <Todo loggedUser={loggedUser} setLoggedUser={setLoggedUser} />
      ) : (
        <LoginPage
          setIsLogged={setIsLogged}
          setLoggedUser={setLoggedUser}
          loggedUser={loggedUser}
        />
      )}
    </div>
  );
};

export default Home;
