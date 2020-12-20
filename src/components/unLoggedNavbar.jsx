import React, { useState, useEffect } from "react";
import "./navbar.css";
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
    <div class={showNav ? "navbar active" : "navbar"}>
      {/*  <a href="/" onClick={logout}>
              Logout
            </a> */}
      {/*   <a href="/networking"> Networking </a> */}
      <small className={showNav ? "navTitle active" : "navTitle "}>
        {" "}
        Jade{" "}
      </small>

      <div className="navButtons">
        <a href="/login" className={showNav ? "active" : " "}>
          Login
        </a>
        {/*  <span className={showNav ? "active" : " "}> | </span> */}
        <a href="/about" className={showNav ? "active" : " "}>
          About
        </a>
        <button
          href="/signup"
          class={showNav ? "navSignUp active " : "navSignUp"}
        >
          Sign Up
        </button>
        {/* <a href={`/group/${group}`}> Groups </a> */}
        {/*  <a href={`/user/profile/${retrieved.user_id}`}> My Profile </a> */}

        {/* <a href="Home"> Home </a> */}
      </div>
    </div>
  );
}

export default UnloggedNav;
