import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import {useParams} from 'react-router-dom';
import "./createProfile.css";

// Helpers
import { getJwt } from "../../Helpers/jwt";

function CreateProfilePage1() {

  // React hook to hold values
  const [location, setLocation] = useState('');
  const [interests, setInterests] = useState('');
  const [bio, setBio] = useState('');
  const [token, setToken] = useState();
  const [team, setTeam] = useState('5fab84088ee9e54cf8d137b5');

  // Get user id from the url parameters
  let {id} = useParams();

  // Get information from user token and store in user var
  let userString = localStorage.getItem('user');
  let user = JSON.parse(userString);

  // Once the page loads, set the token hook to jwt contents
  useEffect(() => {
    setToken(getJwt());
  }, []);

  // Set vars to their corresponding value depending on their field
  function locationChange(e) {
    setLocation(e.target.value);
  }
  function interestsChange(e) {
    setInterests(e.target.value);
  }
  function bioChange(e) {
    setBio(e.target.value);
  }
  const groupChange =(e)=>{
    setTeam(e.target.value);
  }

  // Submit handling button
  function handleSubmit(e) {
    // Prevent page from reloading upon submission
    e.preventDefault();

    // Store values into updateOne JSON
    const updateOne = {
      location: location,
      interests: interests,
      bio: bio,
      group: team
    }
    // Store user id value into user JSON
    const user = {
      userId: id
    }
    // Create headers
    const config = {
      headers : {
        'x-auth-token': token
      }
    }
    

    Axios.post(`https://san-api.herokuapp.com/groups/user/${team}/add`,user)
    .then(res=>{
      //localStorage.setItem('user', JSON.stringify(res.data.user.group));  //save the group id to local storage
    })
    .catch(err=> console.log("Error " + err.msg))

    // Axios.post(`http://localhost:5000/users/${id}/createprofile/2`, updateOne, config)

    // Send post request upon submission to backend 
    Axios.post(`https://san-api.herokuapp.com/users/${id}/createprofile/2`, updateOne, config)
      .then(res => { 
        // Console log the data for debugging
        console.log(res.data);
        // When done, go to user profile page
        window.location.assign(`/user/profile/${id}`);
      })
      // If there is an error, console log it
      .catch(err => console.log("Error: " + err.msg));

      
  }

  return (
    <div className="createProfile">
      <div className="createProfile-container">

        {/* Profile picture container */}
        <div className="profilePicture">
          <img src="/images/createProfile/profilepic.svg" alt="Profile Default" className="profilePictureImg"/>
        </div>

        {/* Profile name container */}
        <div className="createProfile-name-container">
          {/* To be changed later to be dynamic */}
          <h1 className="createProfile-name">{user.firstName} {user.lastName}</h1>

          <div className="progressBar-container progressBar-2">
            {/* Just the progress bar */}
          </div>
        </div>

        {/* Create profile form */}
        <form className="createProfile-form" onSubmit={handleSubmit}>

          {/* Location field */}
          <div className="createProfile-form-field">
            <label className="createProfile-form-label">Location</label>
            <input type="text" placeholder="E.g. San Jose, San Francisco" className="createProfile-form-input" value={location} onChange={locationChange} required/>
          </div>

          {/* Interest field */}
          <div className="createProfile-form-field">
            <label className="createProfile-form-label">Interest</label>
            <input type="text" placeholder="E.g. Working out, watching anime, playing sports" className="createProfile-form-input" value={interests} onChange={interestsChange} required/>
          </div>

          {/* Bio field */}
          <div className="createProfile-form-field">
            <label className="createProfile-form-label">Bio</label>
            <textarea 
              placeholder="Tell me about yourself!" className="createProfile-textArea" value={bio} onChange={bioChange} required></textarea>
          </div>

          {/* Select Team Field */}
          <div className="createProfile-form-field">
          <label className="createProfile-form-label">Team</label>
            <select className="createProfile-form-input" onChange={groupChange}>
              <option value="5fab84088ee9e54cf8d137b5">Team App A</option>
              <option value = "5fab84358ee9e54cf8d137b6">Team App B</option>
              <option value ="5fab843c8ee9e54cf8d137b7">Team App C</option>
              <option value = "5fab844c8ee9e54cf8d137b9">Team Web A</option> 
              <option value = "5fab84538ee9e54cf8d137ba">Team Web B</option> 
              <option value = "5fab84578ee9e54cf8d137bb" >Team Web C</option> 
              <option value ="5fab845e8ee9e54cf8d137bc">Discord</option>
            </select>
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
