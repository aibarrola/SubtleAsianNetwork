import React from "react";
import { Link } from 'react-router-dom';

import "./card.css";

const card = (props) => {


  function handleChange(){
    window.location.assign(`/user/profile/${props.users._id}`);
  }

  return (
    <div>
      <div className="card shadow">
        <h2 className="cardName"> {props.users.firstName}</h2>

        <div className="profilePic"></div>
        <h3 className="jobTitle"> {props.users.profession} </h3>
        <p className="cardBio">{props.users.bio}</p>
        <button className="addFriend"> Add Friend </button>

        <button className="viewProfile" onClick={handleChange}> Profile </button>
        
      </div>
    </div>
  );
};

export default card;
