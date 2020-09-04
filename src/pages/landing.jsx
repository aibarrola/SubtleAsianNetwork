import React from "react";
import "./css/landing.css";

function landing() {
  return (
    <div className="heroBox">
      <h1> Subtle Asian Network</h1>
      <p>
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim "
      </p>

      <div className="btnContainer">
        <button className="BTNsignUp"> Sign Up </button>
        <button className="BTNlogIn"> Log In </button>
      </div>
    </div>
  );
}

export default landing;
