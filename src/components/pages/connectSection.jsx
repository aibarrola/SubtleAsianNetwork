import React from "react";
import "./css/connectSection.css";
import connectSVG from "./img/connect.png";

function render() {
  return (
    <div className="connectSection">
      <img src={connectSVG} className="connect" alt=""/>
      <div className="connectInfoContainer">
        <h2> Connect with Others </h2>
        <p>
          Learn about other people in the Kickstarter program and expand your network. You will also get to see other groups and learn about what they are currently doing by asking questions or simply viewing their progress. 
        </p>
      </div>
    </div>
  );
}

export default render;
