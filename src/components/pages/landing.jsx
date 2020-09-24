import React from "react";
import { Link } from 'react-router-dom';
import "./css/landing.css";
import Opportunities from "./opportunitiesSection";
import Connect from "./connectSection.jsx";
import Career from "./careerSection.jsx";
import Footer from "./footer.jsx";
import logo from "./img/logo.png";
import mainSVG from "./img/landingMain.png";

function landing() {
  return (
    <div>
      <div className="landingSection">
        <img src={logo} className="logo" alt="Logo"/>
        <div className="heroBox">
          <h1>
            Subtle Asian <br></br> Network
          </h1>
          <p className="introText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim "
          </p>

          <div className="btnContainer">
            <Link to="/signup">
              <button className="BTNsignUp"> Sign Up </button>
            </Link>
            
            <Link to="/login">
              <button className="BTNlogIn"> Log In </button>
            </Link>
          </div>
        </div>

        <img src={mainSVG} className="mainSVG" alt=""/>
      </div>
      <Connect />
      <Opportunities />
      <Career />
      <Footer />
    </div>
  );
}

export default landing;
