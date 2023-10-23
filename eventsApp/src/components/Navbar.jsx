import React from "react";
import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import "bootstrap/dist/css/bootstrap.min.css";

const CustomNavbar = () => {
  return (
    <nav className="flex flex-row py-4 mb-10 fixed top-0 z-10 bg-[#161616e8] w-full px-32 justify-between font-bold">
      <div className="flex flex-row space-x-4">
        <Link className="text-[#3498db]" to="/">
          Home
        </Link>
        <Link className="text-[#3498db]" to="/events">
          Events
        </Link>
      </div>
      <div>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default CustomNavbar;
