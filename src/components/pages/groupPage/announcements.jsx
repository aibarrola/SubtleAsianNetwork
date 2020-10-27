import React from "react";
import "./groupPage.css";
import "./announcements.css";

const tasks = (props) => {
  return (
    <div className="announcementsContainer">
      <div className="listNav">
        <small className="taskHeader"> Announcements </small>
        <div className="toDoSwitch">
          <small className="switchTabs active"> New </small>
          <small className="switchTabs"> Old </small>
        </div>
      </div>
      <div className="announcements">
        <div className="announcementCard shadow">
          <div className="cardHeader">
            <div className="cardProfileName">
              <img
                src="/images/createProfile/profilepic.svg"
                alt="Profile Default"
                className="profileCircle"
              />
              <h2 className="cardName"> Stephanie Nguyen </h2>
            </div>

            <span> 1h ago </span>
          </div>
          <div className="cardBody">
            <h3 className="cardTitle"> Meeting Canceled </h3>
            <p className="annoucmentText">
              Weekly Team meeting is cancelled (9/30)Rescheduled at 10/3 at 6pm
              PST Any questions or you are unable to come please message me at
              asdfahdfaldsf@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default tasks;
