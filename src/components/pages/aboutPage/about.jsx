import React from "react";
import Footer from "../landing/footer/Footer";
import "../aboutPage/about.css";
import mapSVG from "./img/aboutMap.svg";
import newIdeasSVG from "./img/newIdeas.svg";
import Navbar from "../../navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function aboutPage() {
  return (
    <div className="about">
      <Navbar className="navBar" />
      <div className="kickStartContainer">
        <div className="kickDefintion">
          <div className="flexCenterCol">
            <h1 className="main-title kickStart"> kick-start </h1>
            <small className="main-title kickSmall"> /ˈkikˌstärt/ </small>
          </div>

          <p className="kickStartDef">
            to make something start to happen or <br /> start to develop more
            quickly{" "}
          </p>
        </div>
      </div>
      <div className="buildProjectSection">
        <div className="flexCenterCol buildProjectText">
          <h1 className="main-title">
            Get a team.
            <br />
            Build a project. <br /> Kickstart your career.
          </h1>
          <div className="greenLine"></div>
        </div>

        <img src={mapSVG} className="mapSVG" alt="Kickstart Graphic" />
      </div>
      <div className="jadeContainer">
        <img
          src={newIdeasSVG}
          className="newIdeasSVG"
          alt="New Ideas Graphic"
        />
        <div className="flexCenterCol">
          <h1 className="jade-title"> What is Jade? </h1>
          <p className="jadeDef">
            We created this program for students to get <br />
            ahead in their career We want future <br /> engineers to feel
            empowered to build beautiful projects <br />
            learn collaboration, and add projects to their resume
          </p>
        </div>
      </div>

      <div className="directions">
        <div className="dirContainer">
          <div className="circleDir">1</div>
          <small className="dirSmall"> Apply </small>
        </div>
        <div className="dirContainer">
          <div className="circleDir">2</div>
          <small className="dirSmall"> Match </small>
        </div>
        <div className="dirContainer">
          <div className="circleDir">3</div>
          <small className="dirSmall"> Build </small>
        </div>
        <div className="dirContainer">
          <div className="circleDir">4</div>
          <small className="dirSmall"> Demo </small>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default aboutPage;
