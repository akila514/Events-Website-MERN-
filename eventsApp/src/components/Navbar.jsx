import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import "bootstrap/dist/css/bootstrap.min.css";

const CustomNavbar = () => {
  const { userInfo } = useSelector((state) => state.auth);
  console.log(userInfo);
  return (
    <nav className="flex flex-row py-4 mb-10 fixed top-0 z-10 bg-[#161616e8] w-full px-10 md:px-32 justify-between font-bold">
      <div className="flex flex-row space-x-4">
        <Link className="text-[#3498db]" to="/">
          Home
        </Link>
        <Link className="text-[#3498db]" to="/events">
          Events
        </Link>
      </div>
      <div>
        {!userInfo && <Link to="/login">Login</Link>}
        {userInfo && (
          <div className="flex flex-row space-x-2">
            <FaUser className="flex my-auto text-white" />
            <Link>{userInfo.username}</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default CustomNavbar;
