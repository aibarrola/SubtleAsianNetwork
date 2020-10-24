import React from "react";
import "./groupPage.css";
import "./qna.css";

const qma = (props) => {
  return (
    <div className="QnAContainer">
      <div className="listNav">
        <small className="taskHeader"> QnA </small>
        <div className="toDoSwitch">
          <small className="switchTabs active"> New </small>
          <small className="switchTabs"> Old </small>
          <small className="switchTabs"> Answered </small>
        </div>
      </div>
      <div className="QnA">
        <input className="addTask" placeholder="Ask a question" />
        <div className="questionCard shadow">
          <div>
            <img
              src="/images/createProfile/profilepic.svg"
              alt="Profile Default"
              className="profileCircle"
            />
            <small className=""> Josh Bark </small>
            <small> posted 2 days ago </small>
          </div>

          <p> How is the front-end connected? </p>
          <button className="answerBTN"> Answer </button>
        </div>
      </div>
    </div>
  );
};

export default qma;
