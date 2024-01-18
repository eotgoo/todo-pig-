"use client";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
// import { useRouter } from "next/router";
import { BASE_URL } from "@/variables";
import axios from "axios";
export const UserContext = createContext({});

const UserProvider = ({ children }: any) => {
  // const router = useRouter();
  const [isLogged, setIsLogged] = useState(false);
  const [userData, setUserData] = useState({ userName: "" });

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("isLogged") === "true") {
        setIsLogged(true);
        const userDataString = localStorage.getItem("userData");
        const userData = userDataString ? JSON.parse(userDataString) : null;

        setUserData({ userName: userData.name });
      } else {
        setIsLogged(false);
      }
    }
  }, []);

  const logIn = async () => {
    try {
      console.log("BASE_URL", BASE_URL);
      const res = await axios.post(`${BASE_URL}/users`, {
        name: userData.userName,
      });

      console.log("Successfully logged in:", res);

      setIsLogged(true);
      localStorage.setItem("isLogged", "true");
      localStorage.setItem("userData", JSON.stringify(res.data.user));

      alert("successfully logged in");
      console.log(res);
    } catch (err) {
      console.log(err);
      alert(`error ${err}`);
    }
  };

  return (
    <UserContext.Provider
      value={{ isLogged, setIsLogged, userData, setUserData, logIn }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
