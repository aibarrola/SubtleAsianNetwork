import React, { useState } from "react";
import "./navbar.css";
import {Link} from "react-router-dom";

function NavDropDown({user_id}) {
  function DropDownItem(props) {
    return (
      <a href= '#'>
        {props.children}
      </a>
    );
  }
  function logout() {
    localStorage.clear();
  }
  return (
    <div className="navDropDown shadow">
      <DropDownItem>
      <a href= {`/user/profile/${user_id}`} className="menu-item">
        <small className="dropTag">My profile </small>
        </a>
      </DropDownItem>
      <DropDownItem>
      <a href= '/' className="menu-item" onClick = {logout}>
        <small className="dropTag">Log out </small>
        </a>
      </DropDownItem>
    </div>
  );
}

export default NavDropDown;
