import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const SignupScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(userName, password);
  };

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/";

  return (
    <form className="flex flex-col space-y-5 md:w-[400px] px-10 md:px-0 mx-auto mt-20">
      <h2 className="my-5 text-2xl font-bold">Login</h2>
      <input
        placeholder="Enter Name"
        className="bg-transparent border p-2 rounded-lg text-white"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        placeholder="Enter Email"
        className="bg-transparent border p-2 rounded-lg text-white"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
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
        Signup
      </button>
      <div className="flex flex-row space-x-2">
        <p>Already have an account?</p>
        <Link
          className="text-sm text-[#3498db]"
          to={redirect ? `/login?redirect=${redirect}` : `/`}
        >
          Login
        </Link>
      </div>
    </form>
  );
};

export default SignupScreen;
