import React from "react";
import "./groupPage.css";

const groupHeader = (props) => {
  return (
    <section className="groupPageContainer">
      <div className="groupHeader">
        <h1 className="groupName"> Group Name</h1>
        <p className="groupDesc"> This is the web development team</p>

        <div className="groupButtonContainer">
          <button className="editGroup"> Edit Group </button>
        </div>
      </div>

    </section>
  );
};

export default groupHeader;
