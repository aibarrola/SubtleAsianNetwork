import React from "react";
import "./groupPage.css";
import GroupToDo from "../groupPage/groupToDo";
import Announcments from "../groupPage/announcements";
import Navbar from "../../navbar";
import GroupHeader from "./groupHeader";
import QnA from "./qna";

const editProfile = (props) => {
  return (
    <section className="groupPageContainer">
      <Navbar />
      <GroupHeader />

      <div className="listContainer">
        <Announcments />
        <GroupToDo />
        <QnA />
      </div>
    </section>
  );
};

export default editProfile;
