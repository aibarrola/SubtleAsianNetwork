import React from "react";
import "./createProfile.css";

function createProfilePage1() {
  return (
    <div className="createProfile">
      <div className="createProfile-container">

        <div className="profilePicture">
          <img src="/images/createProfile/profilepic.svg" alt="Profile Picture Default" className="profilePictureImg"/>
        </div>

        <div className="createProfile-name-container">
          {/* To be changed later to be dynamic */}
          <h1 className="createProfile-name">John Smith</h1>

          {/* Just the progress bar */}
          <img src="/images/createProfile/ProgressBar2.svg" alt="" className="progressBar"/>
        </div>

        <form action="" className="createProfile-form">
          <div className="createProfile-form-field">
            <label className="createProfile-form-label">Location:</label>
            <input type="text" placeholder="E.g. San Jose State University" className="createProfile-form-input"/>
          </div>

          <div className="createProfile-form-field">
            <label className="createProfile-form-label">Interest:</label>
            <input type="text" placeholder="E.g. Student, Software Engineer" className="createProfile-form-input"/>
          </div>

          <div className="createProfile-form-field">
            <label className="createProfile-form-label">Bio:</label>
            <textarea 
              placeholder="Separate interests with a comma. E.g. STONKS, money, love" className="createProfile-textArea"></textarea>
          </div>

          <div className="createProfile-btn-container"> 
            <input type="submit" className="btn-continue" value="Continue"/>
          </div>

        </form>
      </div>
    </div>
  );
}

export default createProfilePage1;
