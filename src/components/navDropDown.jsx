import React, { useState } from "react";
import "./navbar.css";

function NavDropDown() {
  function DropDownItem(props) {
    return (
      <a href="#" className="menu-item">
        {props.children}
      </a>
    );
  }

  return (
    <div className="navDropDown shadow">
      <DropDownItem>
        <small className="dropTag">My profile </small>
      </DropDownItem>
      <DropDownItem>
        <small className="dropTag">Log out </small>
      </DropDownItem>
    </div>
  );
}

export default NavDropDown;
