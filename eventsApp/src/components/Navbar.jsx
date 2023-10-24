import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { useLogoutUserMutation } from "../store/userSlice";
import { authActions } from "../store/authSlice";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import "bootstrap/dist/css/bootstrap.min.css";

const CustomNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logout] = useLogoutUserMutation();

  const logoutHandler = async () => {
    await logout();
    dispatch(authActions.logout());

    navigate("/login");
  };

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
      <div className="flex flex-row">
        {!userInfo && <Link to="/login">Login</Link>}
        {userInfo && userInfo.isAdmin && (
          <div className="flex flex-row">
            <Link className="flex my-auto mr-8 font-normal text-sm">
              Add a Event
            </Link>
          </div>
        )}
        {userInfo && (
          <div className="flex flex-row text-white">
            <button
              onClick={logoutHandler}
              className="bg-[#3498db] py-1 px-2 rounded-lg font-normal text-sm mr-8"
            >
              Logout
            </button>
            <FaUser className="flex my-auto mr-2" />
            <Link className="flex my-auto font-normal text-sm">
              {userInfo.username}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default CustomNavbar;
