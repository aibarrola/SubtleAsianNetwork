import React from "react";
import "./groupPage.css";
import GroupToDo from "../groupPage/groupToDo";
import Announcments from "../groupPage/announcements";
import Navbar from "../../navbar";
import GroupHeader from "./groupHeader";

const editProfile = (props) => {
  return (
    <section className="groupPageContainer">
       <Navbar />
      <GroupHeader />

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
