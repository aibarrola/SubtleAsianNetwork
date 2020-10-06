import React from "react";
import "./editProfile.css";

const editProfile = (props) => {
  return (
    <div className="editProfileContainer">
      <h1 className="editProfileHeader "> Edit Profile </h1>

      <div className="profilePicContainer">
        <h3> Profile Picture </h3>
        <div className="profilePic"></div>
      </div>
      <div className="editsContainer">
        <h3> About </h3>
        <textarea className="aboutEdit" />
        <h3> Interests </h3>
        <input className="interests" />
        <h3> Professions </h3>
        <div className="professionContainer">
          <input />
          <small> at </small>
          <input />
        </div>
        <h3> Location </h3>
        <input />

        <div className="socialMediaLinksContainer">
          <h3> Links </h3>
          <div className="linkEditContainer">
            <h4> Linkedin: </h4>
            <input />
          </div>
          <div className="linkEditContainer">
            <h4> Instagram: </h4>
            <input />
          </div>
          <div className="linkEditContainer">
            <h4> Facebook: </h4>
            <input />
          </div>
          <div className="linkEditContainer">
            <h4> Website: </h4>
            <input />
          </div>
        </div>
      </div>
      <button> Save Changes</button>
    </div>
  );
};

export default editProfile;
