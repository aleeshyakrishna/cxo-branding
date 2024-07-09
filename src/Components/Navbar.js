// Navbar.js
import React, { useState } from "react";
import "../css/Navbar.css";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import newlogo from "../Images/newlogo.png";
import { useDispatch, useSelector } from "react-redux"; // Import useDispatch and useSelector from react-redux
import { logoutUser } from "../redux/userReducer"; // Adjust the path accordingly

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch(); // Get dispatch function from react-redux
  const handleClick = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  // Use useSelector to get the user state from Redux
  const { userData, token } = useSelector((state) => state.userData);

  const handleLogout = () => {
    // Dispatch the logoutUser action to update the state
    dispatch(logoutUser());
    // Additional logic, such as redirecting the user, can be added here
  };

  return (
    <div>
      <div className="main-navbar-container" id="home">
        <nav data-aos="fade-down" data-aos-duration="3000">
          <div className="nav-logo">
            <img src={newlogo} alt="" />
          </div>
          <ul className={open ? "nav-links " : "nav-links active"}>
            <li onClick={closeMenu}>Home</li>
            <li onClick={closeMenu}>Jobs</li>
            <li onClick={closeMenu}>Message</li>
            <li onClick={closeMenu}>About</li>
            <li onClick={closeMenu}>Contact</li>
          </ul>
          <ul className="nav-log">
            {token ? (
              <>
                {/* <li>{userData.username}</li> */}
                <li onClick={handleLogout}>Logout</li>
              </>
            ) : (
              <>
                <Link to="/Login">
                  <li>Login</li>
                </Link>
                <Link to="/Signup">
                  <li>SignUp</li>
                </Link>
              </>
            )}
          </ul>
          <div className="nav-icons" onClick={handleClick}>
            {open ? <GrClose /> : <HiOutlineMenuAlt1 />}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
