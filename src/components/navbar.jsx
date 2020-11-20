import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import "./navbar.css";

import { getJwt } from "./Helpers/jwt";

function Navbar() {
  const [token, setToken] = useState();

  let retrieved = localStorage.getItem("user");
  retrieved = JSON.parse(retrieved);

  const [user, setUser] = useState(retrieved);
  const [group, setGroup] = useState("");
  const [showNav, setNavBar] = useState(false);

  let history = useHistory();

  /*   useEffect(() => {
    setToken(getJwt());
    Axios.get(`https://san-api.herokuapp.com/users/${user.user_id}`).then(
      (response) => {
        setUser(response.data);
        setGroup(response.data.group);
      }
    );
  }, []); */

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

      <div>
        <a href="/login" className={showNav ? "active" : " "}>
          Login
        </a>
        <span className={showNav ? "active" : " "}> | </span>
        <a href="/about" className={showNav ? "active" : " "}>
          About
        </a>
        <button
          href="/signup"
          class={showNav ? " navSignUp active " : "BTNsignUp navSignUp"}
          className="BTNsignUp navRight"
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

export default Navbar;
