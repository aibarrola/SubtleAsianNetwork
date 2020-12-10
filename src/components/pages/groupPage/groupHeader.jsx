import React from "react";
import "./groupPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function GroupHeader({ showPopUp, groupSetting }) {
  return (
    <section className="groupPageContainer">
      <div className="groupHeader">
        <div className="groupPic "> Avatar </div>
        <h1 className="groupName"> {groupSetting.groupName}</h1>
        <p className="groupDesc"> {groupSetting.description}</p>
        <div className="groupButtonContainer">
          <button className="editGroup" onClick={showPopUp}>
            {" "}
            Edit Group{" "}
          </button>
        </div>
        * <button className="actionBTN"> Action </button>
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
    </section>
  );
}

export default GroupHeader;
