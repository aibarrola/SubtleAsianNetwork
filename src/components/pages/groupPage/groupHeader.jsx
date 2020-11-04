import React from "react";
import "./groupPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function GroupHeader({ showPopUp, groupSetting }) {
  return (
    <section className="groupPageContainer">
      <div className="groupHeader">
        <div>
          <h1 className="groupName"> {groupSetting.groupName}</h1>
          <p className="groupDesc"> {groupSetting.description}</p>
          <a href={groupSetting.gitHub} target="_blank">Github Link</a>
          
          <div className="groupButtonContainer">
            <button className="editGroup" onClick={showPopUp}>
              {" "}
              Edit Group
              {" "}
            </button>
          </div>
        </div>
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
