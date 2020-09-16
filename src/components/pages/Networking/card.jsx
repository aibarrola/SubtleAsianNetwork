import React from "react";
import "./card.css";

function card() {
  return (
    <div>
      <div className="card shadow">
        <h2 className="cardName"> Name </h2>
        <div className="profilePic"></div>
        <h3 className="jobTitle"> Software Engineer</h3>
        <p className="cardBio">
          {" "}
          Bio, Hey I work at here and go to school here{" "}
        </p>
        <button className="addFriend"> Add Friend </button>
      </div>
    </div>
  );
}

export default card;
