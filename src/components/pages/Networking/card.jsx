import React from "react";
import "./card.css";

const card = ({ users: { firstName, bio, profession } }) => {
  return (
    <div>
      <div className="card shadow">
        <h2 className="cardName"> {firstName}</h2>

        <div className="profilePic"></div>
        <h3 className="jobTitle"> {profession} </h3>
        <p className="cardBio">{bio}</p>
        <button className="addFriend"> Add Friend </button>
      </div>
    </div>
  );
};

export default card;
