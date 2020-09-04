import React from "react";

import "./css/landing.css";
import mainSVG from "./img/landingMain.png";
import logo from "./img/logo.png";

function landing() {
  return (
    <div className="landingSection">
      <img src={logo} className="logo" />
      <div className="heroBox">
        <h1>
          Subtle Asian <br></br> Network
        </h1>
        <p className="introText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim "
        </p>

        <div className="btnContainer">
          <button className="BTNsignUp"> Sign Up </button>
          <button className="BTNlogIn"> Log In </button>
        </div>
      </div>
      <img src={mainSVG} className="mainSVG" />
    </div>
  );
}

export default landing;
