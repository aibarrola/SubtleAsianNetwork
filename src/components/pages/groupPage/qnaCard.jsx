import React from "react";
import "../groupPage/qna.css";

function CardContainer() {
  return (
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
  );
}

export default CardContainer;
