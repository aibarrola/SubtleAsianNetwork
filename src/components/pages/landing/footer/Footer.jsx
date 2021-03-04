import React from "react";
import { Link } from "react-router-dom";

import "./footer.css";

import Logo from "../logo.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">

        <h1 className="footerTitle"> Kickstart your career now </h1>
        <Link to="/signup">
          <button className="BTNsignUp footerBTN"> Join now </button>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
