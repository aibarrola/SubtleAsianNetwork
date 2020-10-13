import React from "react";
import "./groupToDo.css";

const tasks = (props) => {
  return (
    <div className="tasksContainer">
      <div className="toDoNav">
        <small className="taskHeader"> Tasks </small>
        <div className="toDoSwitch">
          <small className="switchTabs active"> All </small>
          <small className="switchTabs"> In-progress </small>
          <small className="switchTabs"> Completed </small>
        </div>
      </div>
      <div className="todoContainer">
        <input className="addTask" placeholder="Add a task" />
      </div>
    </div>
  );
};

export default tasks;
