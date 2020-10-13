import React from "react";
import "./groupPage.css";
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
        <div className="taskList">
          <div className="taskLi">
            <div className="toDoCheckBox">
              <div className="checkCircle"></div>
            </div>

            <small className="taskName"> Develope Front End </small>
            <small className="taskDate"> Due March 2nd </small>
          </div>
          <div className="taskLi">
            <div className="toDoCheckBox">
              <div className="checkCircle"></div>
            </div>

            <small className="taskName"> Fix backend </small>
            <small className="taskDate"> Due March 2nd </small>
          </div>
          <div className="taskLi">
            <div className="toDoCheckBox">
              <div className="checkCircle active"></div>
            </div>

            <small className="taskName"> Read messages </small>
            <small className="taskDate"> Due March 2nd </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default tasks;
