import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import {useParams} from 'react-router-dom';
import "./createProfile.css";

// Helpers
import { getJwt } from "../../Helpers/jwt";

function CreateProfilePage1() {

  // React hooks to hold values
  const [school, setSchool] = useState('');
  const [profession, setProfession] = useState('');
  const [ethnicity, setEthnicity] = useState('');
  const [token, setToken] = useState();
  // const [error, setError] = useState("");

  // Get user id from the url parameters
  let {id} = useParams();

  // Get information from user token and store in user var
  let userString = localStorage.getItem('user');
  let user = JSON.parse(userString);

  
  // Once page load get JWT and set Token
  useEffect(() => {
    setToken(getJwt());
  }, []);

  // Set vars to their corresponding value depending on their field
  function schoolChange(e) {
    setSchool(e.target.value);
  }
  function professionChange(e) {
    setProfession(e.target.value);
  }
  function ethnicityChange(e) {
    setEthnicity(e.target.value);
  }

  // Submit button handling
  function handleSubmit(e) {
    // Prevent page from reloading upon submission
    e.preventDefault();

    // Store values into updateOne JSON
    const updateOne = {
      school: school,
      profession: profession,
      ethnicity: ethnicity
    }

    // Create headers
    const config = {
      headers : {
        'x-auth-token': token
      }
    }

    // Send post request upon submission to backend
    Axios.post(`https://san-api.herokuapp.com/users/${id}/createprofile/1`, updateOne, config)
      .then(res => { 
        // Console log the data for debugging
        console.log(res.data);

        // When done, go to next step in create profile
        window.location.assign(`/user/${id}/cp/2`);
      })
      // If there is an error, console log it
      .catch(err => console.log("Error: " + err));

  }

  // Render this HTMl code on the webpage
  return (
    <div className="createProfile">
      <div className="createProfile-container">

        {/* Profile picture container */}
        <div className="profilePicture">
          <img src="/images/createProfile/profilepic.svg" alt="Profile Default" className="profilePictureImg"/>
        </div>

        <div className="createProfile-name-container">
          {/* To be changed later to be dynamic */}
          <h1 className="createProfile-name">{user.firstName} {user.lastName}</h1>

          <div className="progressBar-container progressBar-1">
            {/* Just the progress bar */}
          </div>
        </div>

        <form className="createProfile-form" onSubmit={handleSubmit}>

          {/* School field */}
          <div className="createProfile-form-field">
            <label className="createProfile-form-label">School</label>
            <input type="text" placeholder="E.g. San Jose State University" className="createProfile-form-input" value={school} onChange={schoolChange} required/>
          </div>

          {/* Profession field */}
          <div className="createProfile-form-field">
            <label className="createProfile-form-label">Profession</label>
            <input type="text" placeholder="E.g. Computer Science Student, Software Engineer Intern" className="createProfile-form-input" value={profession} onChange={professionChange} required/>
          </div>

          {/* Ethnicity field */}
          <div className="createProfile-form-field">
            <label className="createProfile-form-label">Ethnicity</label>
            <input type="text" placeholder="E.g. Vietnamese" className="createProfile-form-input" value={ethnicity} onChange={ethnicityChange}/>
          </div>

          {/* Submit button */}
          <div className="createProfile-btn-container"> 
            <input type="submit" className="btn-continue" value="Continue"/>
          </div>

        </form>
      </div>
    </div>
  );
}

export default CreateProfilePage1;
