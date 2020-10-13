import React from "react";
import "./groupPage.css";
import GroupToDo from "../groupPage/groupToDo";
import Announcments from "../groupPage/announcements";
import Navbar from "../../navbar";

const editProfile = (props) => {
  return (
    <section className="groupPageContainer">
      {/*  <Navbar /> */}
      <div className="groupHeader">
        <div className="groupPic "> Avatar </div>
        <h1 className="groupName"> Group Name</h1>

        <div className="memberAvatarsContainer">
          <img
            src="/images/createProfile/profilepic.svg"
            alt="Profile Default"
            className="profileCircle"
          />
          <img
            src="/images/createProfile/profilepic.svg"
            alt="Profile Default"
            className="profileCircle"
          />
          <img
            src="/images/createProfile/profilepic.svg"
            alt="Profile Default"
            className="profileCircle"
          />
          <img
            src="/images/createProfile/profilepic.svg"
            alt="Profile Default"
            className="profileCircle"
          />
          <img
            src="/images/createProfile/profilepic.svg"
            alt="Profile Default"
            className="profileCircle"
          />
          <span className="moreUsers">...</span>
        </div>
        <div className="groupButtonContainer">
          <button className="editGroup"> Edit Group </button>
          <button className="actionBTN"> Action </button>
        </div>
        <div className="countDownContainer">55: 13 : 00</div>
        <div className="progressBar">
          <div className="loadingProgress"> 30% </div>
        </div>
      </div>

      <div className="listContainer">
        <Announcments />
        <GroupToDo />

        <div className="questionsAnswers">
          <h3> Questions </h3>
        </div>
      </div>
    </section>
  );
};

export default editProfile;
