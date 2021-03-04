import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { getJwt } from "./Helpers/jwt";

function UnloggedNav() {
  const [group, setGroup] = useState("");
  const [showNav, setNavBar] = useState(false);
  const [loggedInNav, setloggedIn] = useState(false);

  function logout() {
    localStorage.clear();
  }

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className={showNav ? "navbar active" : "navbar"}>

      <div className="nav-container">

        <div className="navTitle">
          <Link to="/" className="nav-logo">
            Jade
          </Link>
        </div>
        <div className="navButtons">
          <Link to="/about" className="nav-btn">
            About
          </Link>
          <Link to="/login" className="nav-btn">
            Login
          </Link>
          <Link to="/signup" className=" nav-btn">
            Sign Up
          </Link>
        </div>

      </div>
      
    </div>
  );
}

export default UnloggedNav;
