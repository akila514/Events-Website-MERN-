import React, { useState } from "react";

const LoginScreen = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(userName, password);
  };

  return (
    <form className="flex flex-col space-y-5 md:w-[400px] px-10 md:px-0 mx-auto mt-20">
      <h2 className="my-5 text-2xl font-bold">Login</h2>
      <input
        placeholder="Enter Username"
        className="bg-transparent border p-2 rounded-lg text-white"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        placeholder="Enter Password"
        className="bg-transparent border p-2 rounded-lg text-white"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button
        onClick={onSubmitHandler}
        className="rounded-lg p-2 bg-[#3498db] text-white"
      >
        Signin
      </button>
      <p>Don't have an account yet?</p>
      <button className="rounded-lg p-2 bg-[#d4d4d4] text-gray-800">
        Sign up
      </button>
    </form>
  );
};

export default LoginScreen;
