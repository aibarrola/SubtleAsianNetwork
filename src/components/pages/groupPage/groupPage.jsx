import React from "react";
import "./groupPage.css";
import Navbar from "../../navbar";
import GroupHeader from "./groupHeader";

const editProfile = (props) => {
  return (
    <section className="groupPageContainer">
       <Navbar />
      <GroupHeader />

      <div className="listContainer">
        <div className="announcements">
          <h3> Announcements </h3>
        </div>
        <div className="tasks">
          <h3> Tasks </h3>
        </div>
        <div className="questionsAnswers">
          <h3> Questions </h3>
        </div>
      </div>
    </section>
  );
};

export default editProfile;
