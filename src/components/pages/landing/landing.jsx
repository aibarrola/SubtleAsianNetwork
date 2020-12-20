import React, {useEffect, useState} from "react";
import { Link, useHistory } from "react-router-dom";

import logo from "./logo.png";
import mainSVG from "./landingMain.png";

import "./landing.css";

import Connect from "./connectSection/Connect";
import Progress from "./trackProgress/TrackProgress";
import Career from "./career/Career";
import Footer from "./footer/Footer";
import Navbar from "../../unLoggedNavbar"; 
import { getJwt } from "../../Helpers/jwt";

function LandingRevise() {
 const [redirect, setRedirect] = useState(false);
  const [user, setUser] = useState();
  const [token, setToken] = useState();
  const[loggedNav, setLoggedNav] = useState(false);

  let history = useHistory();

  useEffect(() => {
    if (localStorage.getItem('user') && localStorage.getItem('token') ) {
      let retreived = localStorage.getItem('user');
      retreived = JSON.parse(retreived);
      setUser(retreived.user_id);
      setToken(getJwt());
      setRedirect(true);
    }
  }, [])
  if (redirect) {
    history.push(`/user/profile/${user}`);
    setRedirect(false);
  }
  return (
    <div>
      <Navbar/>
      <div className="landingSection">
        {/*   <div className="logo-container">
          <img src={logo} className="logo" alt="Logo" />
        </div> */}

        <div className="hero-container">
          <div className="hero-text">
            <div className="hero-title">
              <h1 className="main-title">Jade</h1>
              <h1 className="sub-title">Kickstarter Program</h1>
            </div>
            <div className="hero-desc">
              <p className="hero-desc-item">
                Keep track of your team's progress
              </p>
            </div>
            <div className="btn-container">
              <Link to="/signup">
                <button className="BTNsignUp"> Join now </button>
              </Link>

              {/*  <Link to="/login">
                <button className="BTNlogIn"> Log In </button>
              </Link> */}
            </div>
          </div>
          <div className="hero-img">
            <img src={mainSVG} alt="Hero graphic" />
          </div>
        </div>
      </div>

      <Connect />
      <Progress />
      {/* <Career /> */}
      <Footer />
    </div>
  );
}

export default LandingRevise;
