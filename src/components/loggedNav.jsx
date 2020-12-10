import React, { useState } from "react";
import "./navbar.css";
import DropDown from "./navDropDown";
import { useHistory } from "react-router-dom";
import { getJwt } from "./Helpers/jwt";

function LoggedNav() {
  /*   const [user, setUser] = useState(retrieved); */
  const [dropDown, setDrop] = useState(false);
  const [group, setGroup] = useState("");
  const [showNav, setNavBar] = useState(false);

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
    <div className={"navbar active"}>
      <small className="navTitle active"> Jade </small>

      <div className="navButtons">
        <a href="Home " className="active">
          Home
        </a>
        <a href="/networking" className="active">
          Networking
        </a>
        <a href="/group" className="active">
          Group
        </a>
        <a href="/group" className="active">
          About
        </a>
        <div
          className="profileOptions flexRowCenter circle"
          onClick={() => setDrop(!dropDown)}
        >
          <img
            src="/images/createProfile/profilepic.svg"
            alt="Profile Default"
            className="profileOptions"
          />
          {dropDown && <DropDown />}
        </div>

        {/*   <a href={`/group/${group}`}> Groups </a>
        <a href={`/user/profile/${retrieved.user_id}`}> My Profile </a> */}
      </div>
    </div>
  );
}

export default LoggedNav;
