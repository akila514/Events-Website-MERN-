import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="md:mx-32">
      <Outlet />
    </div>
  );
};

export default App;
