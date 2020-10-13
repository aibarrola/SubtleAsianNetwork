import React from "react";
import "./groupPage.css";
import "./announcements.css";

const tasks = (props) => {
  return (
    <div className="announcementsContainer">
      <div className="toDoNav">
        <small className="taskHeader"> Announcements </small>
        <div className="toDoSwitch">
          <small className="switchTabs active"> New </small>
          <small className="switchTabs"> Old </small>
        </div>
      </div>
      <div className="announcements"></div>
    </div>
  );
};

export default tasks;
