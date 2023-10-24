import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import CustomNavbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <CustomNavbar />
      <div className="mx-10 md:mx-32">
        <Outlet />
      </div>
    </>
  );
};

export default App;
