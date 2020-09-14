import React, { useState } from 'react';
import Axios from 'axios';
import "./createProfile.css";

function CreateProfilePage1(props) {

  const [school, setSchool] = useState('');
  const [profession, setProfession] = useState('');
  const [ethnicity, setEthnicity] = useState('');

  function schoolChange(e) {
    setSchool(e.target.value);
  }
  function professionChange(e) {
    setProfession(e.target.value);
  }
  function ethnicityChange(e) {
    setEthnicity(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const updateOne = {
      school: school,
      profession: profession,
      ethnicity: ethnicity
    }

    Axios.post('http://localhost:5000/updateProfile/1/:userID', updateOne)
      .then(res => { 
        console.log(res.data);
        window.location.replace('/createProfile2');
      })
      .catch(err => console.oog("Error: " + err));

  }

  return (
    <div className="createProfile">
      <div className="createProfile-container">

        <div className="profilePicture">
          <img src="/images/createProfile/profilepic.svg" alt="Profile Default" className="profilePictureImg"/>
        </div>

        <div className="createProfile-name-container">
          {/* To be changed later to be dynamic */}
          <h1 className="createProfile-name">John Smith</h1>

          {/* Just the progress bar */}
          <img src="/images/createProfile/ProgressBar1.svg" alt="" className="progressBar"/>
        </div>

        <form className="createProfile-form" onSubmit={handleSubmit}>
          <div className="createProfile-form-field">
            <label className="createProfile-form-label">School:</label>
            <input type="text" placeholder="E.g. San Jose State University" className="createProfile-form-input" value={school} onChange={schoolChange} required/>
          </div>

          <div className="createProfile-form-field">
            <label className="createProfile-form-label">Profession:</label>
            <input type="text" placeholder="E.g. Student, Software Engineer" className="createProfile-form-input" value={profession} onChange={professionChange} required/>
          </div>

          <div className="createProfile-form-field">
            <label className="createProfile-form-label">Ethnicity:</label>
            <input type="text" placeholder="E.g. Vietnamese" className="createProfile-form-input" value={ethnicity} onChange={ethnicityChange}/>
          </div>

          <div className="createProfile-btn-container"> 
            <input type="submit" className="btn-continue" value="Continue"/>
          </div>

        </form>
      </div>
    </div>
  );
}

export default CreateProfilePage1;
