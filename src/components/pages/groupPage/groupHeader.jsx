import React from "react";
import "./groupPage.css";
function GroupHeader({ showPopUp, groupSetting }) {
  return (
    <section className="groupPageContainer">
      <div className="groupHeader">
        <div className="groupPic "> Avatar </div>
        <h1 className="groupName"> {groupSetting.groupName}</h1>

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
          <button className="editGroup" onClick={showPopUp}>
            {" "}
            Edit Group{" "}
          </button>
          <button className="actionBTN"> Action </button>
        </div>
        <div className="countDownContainer">55: 13 : 00</div>
        <div className="progressBar">
          <div
            className="loadingProgress"
            style={{ width: `${groupSetting.projectPercent}%` }}
          >
            {groupSetting.projectPercent}%
          </div>
        </div>
      </div>
    </section>
  );
}

export default GroupHeader;
