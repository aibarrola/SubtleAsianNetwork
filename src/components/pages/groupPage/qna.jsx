import React from "react";
import "./groupPage.css";
import "./qna.css";
import QnaCardContainer from "../groupPage/qnaCard.jsx";
import QnaForm from "../groupPage/qnaForm.jsx";

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
        <QnaForm />
        <QnaCardContainer />
      </div>
    </div>
  );
};

export default qma;
