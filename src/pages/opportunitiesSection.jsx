import React from "react";
import "./css/opportunitiesSection.css";
import opportunitiesSVG from "./img/opportunities.png";

function render() {
  return (
    <div className="opportunitiesSection">
      <div className="connectInfoContainer">
        <h2> Find opportunities </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <img src={opportunitiesSVG} className="connect" />
    </div>
  );
}

export default render;
