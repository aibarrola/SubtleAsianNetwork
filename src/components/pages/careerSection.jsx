import React from "react";
import "./css/careerSection.css";
import CareerSVG from "./img/career.png";

function render() {
  return (
    <div className="careerSection">
      <h2> Start your Career </h2>
      <img src={CareerSVG} className="careerSVG" />
    </div>
  );
}

export default render;
