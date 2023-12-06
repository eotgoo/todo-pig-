import React from "react";

const LoginPage = ({ setUserData, logIn }: any) => {
  return (
    <div className="flex flex-col justify-between gap-2 w-[400px] h-max bg-[#7FB3D5] rounded-md p-3">
      <h1 className="font-bold text-lg">Your Username</h1>
      <input
        className="h-[40px] rounded-md text-black px-2"
        onChange={(e) => {
          setUserData({ userName: e.target.value });
        }}
      />
      <div className="flex justify-end">
        <button
          className="px-3 py-1 bg-[black] w-[100%] rounded-md"
          onClick={() => {
            logIn();
          }}
        >
          Join
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
