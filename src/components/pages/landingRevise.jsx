import React from 'react';
import { Link } from 'react-router-dom';

import logo from './img/logo.png'
import mainSVG from "./img/landingMain.png";

import './css/landing.css';

import Connect from "./connectSection/Connect";

function LandingRevise() {
  return (
    <div>
      <div className="landingSectionRevise">

        <div className="logo-container">
          <img src={logo} className="logoRevise" alt="Logo"/>
        </div>

        <div className="hero-container">
          <div className="hero-text">
            <div className="hero-title">
              <h1 className="main-title">Subtle Asain Network</h1>
              <h1 className="sub-title">Kickstarter Program</h1>
            </div>
            <div className="hero-desc">
              <p className="hero-desc-item">Keep track of your team's progress</p>
            </div>
            <div className="btn-container-revise">
              <Link to="/signup">
                <button className="BTNsignUp"> Sign Up </button>
              </Link>
              
              <Link to="/login">
                <button className="BTNlogIn"> Log In </button>
              </Link>
            </div>
          </div>
          <div className="hero-img">
            <img src={mainSVG} alt="Hero graphic"/>
          </div>
        </div>

      </div>

      <Connect />
    </div>
  )
}

export default LandingRevise;