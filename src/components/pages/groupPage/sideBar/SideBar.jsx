import React, { useState } from "react";
import "../sideBar/SideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHome,
  faPowerOff,
  faUsers,
  faNetworkWired,
} from "@fortawesome/free-solid-svg-icons";

function SideBar() {
  const [sideBar, setSideBar] = useState(false);
  const showSideBar = () => setSideBar(!sideBar);

  return (
    <>
      {!sideBar && (
        <div className="sideBarIcon shadow" onClick={showSideBar}>
          <FontAwesomeIcon className="checkIcon bars" icon={faBars} />
        </div>
      )}

      <nav className={sideBar ? "sideBar active" : "sideBar"}>
        <div className="sideBarProfileContainer">
          <img
            src="/images/createProfile/profilepic.svg"
            alt="Profile Default"
            className="profileCircle"
          />
          <span className="sidebarName"> Rick Bicycle </span>
        </div>

        <div className="sideMenu">
          <ul className="menuList">
            <li>
              <FontAwesomeIcon
                className="sideMenuIcons"
                icon={faHome}
                onclick={showSideBar}
              ></FontAwesomeIcon>
              Home
            </li>
            <li>
              <FontAwesomeIcon
                className="sideMenuIcons"
                icon={faNetworkWired}
              ></FontAwesomeIcon>
              Network
            </li>
            <li>
              <FontAwesomeIcon
                className="sideMenuIcons"
                icon={faUsers}
              ></FontAwesomeIcon>
              My Groups
            </li>
            <li>
              <FontAwesomeIcon
                className="sideMenuIcons"
                icon={faPowerOff}
              ></FontAwesomeIcon>
              Explore
            </li>
          </ul>
        </div>
        <div className="otherTeamsContainer">
          Other Teams
          <ul className="teamList">
            <li>Group # 1</li>
            <li>Group # 2</li>
            <li>Group # 3</li>
            <li>Group # 4</li>
          </ul>
        </div>
        <div className="sideIconContainer" onclick={showSideBar}>
          <FontAwesomeIcon
            className=" sideIcon"
            onclick={showSideBar}
            icon={faBars}
          />
        </div>
      </nav>
    </>
  );
}
export default SideBar;
