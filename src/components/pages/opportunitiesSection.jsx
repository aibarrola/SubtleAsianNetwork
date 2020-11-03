import React from "react";
import "./css/opportunitiesSection.css";
import opportunitiesSVG from "./img/opportunities.png";

function render() {
  return (
    <div className="opportunitiesSection">
      <div className="connectInfoContainer">
        <h2 className="mainSectionHeader"> Track Team Progress </h2>
        <p>
          You will be able to edit and customize your own team page. This will be your main hub for sending out announcements, asking questions, and assigning tasks. All customized for you to make it as easy as possible to create an efficient workflow for your project!
        </p>
      </div>
      <img src={opportunitiesSVG} className="connect" alt=""/>
    </div>
  );
}

export default render;
