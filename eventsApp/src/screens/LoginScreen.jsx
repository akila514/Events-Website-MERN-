import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/";

  const onSubmitHandler = (event) => {
    event.preventDefault();
    
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
        Login
      </button>
      <div className="flex flex-row space-x-2">
        <p>Don't have an account yet?</p>
        <Link
          className="text-sm text-[#3498db]"
          to={redirect ? `/register?redirect=${redirect}` : `/`}
        >
          Register
        </Link>
      </div>
    </form>
  );
};

export default LoginScreen;
