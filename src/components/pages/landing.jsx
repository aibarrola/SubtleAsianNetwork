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
            Subtle Asian Network <br />
            Kickstarter Program
          </h1>
          <p className="introText">
            Welcome members of the Kickstarter Program! Here, you can find others in the kickstarter program and use this website to keep track of your progress within your team. 
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
