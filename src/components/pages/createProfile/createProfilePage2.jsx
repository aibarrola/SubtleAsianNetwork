import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import {useParams} from 'react-router-dom';
import "./createProfile.css";

// Helpers
import { getJwt } from "../../Helpers/jwt";

function CreateProfilePage1() {

  const [location, setLocation] = useState('');
  const [interests, setInterests] = useState('');
  const [bio, setBio] = useState('');
  const [token, setToken] = useState();

  let {id} = useParams();
  let userString = localStorage.getItem('user');
  let user = JSON.parse(userString);

  useEffect(() => {
    setToken(getJwt());
  }, []);

  function locationChange(e) {
    setLocation(e.target.value);
  }
  function interestsChange(e) {
    setInterests(e.target.value);
  }
  function bioChange(e) {
    setBio(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const updateOne = {
      location: location,
      interests: interests,
      bio: bio
    }

    const config = {
      headers : {
        'x-auth-token': token
      }
    }

    // Axios.post(`http://localhost:5000/users/${id}/createprofile/2`, updateOne, config)
    Axios.post(`https://san-api.herokuapp.com/users/${id}/createprofile/2`, updateOne, config)
      .then(res => { 
        console.log(res.data);
        window.location.assign(`/user/profile/${id}`);
      })
      .catch(err => console.log("Error: " + err.msg));

  }

  return (
    <div className="createProfile">
      <div className="createProfile-container">

        <div className="profilePicture">
          <img src="/images/createProfile/profilepic.svg" alt="Profile Default" className="profilePictureImg"/>
        </div>

        <div className="createProfile-name-container">
          {/* To be changed later to be dynamic */}
          <h1 className="createProfile-name">{user.firstName} {user.lastName}</h1>

          {/* Just the progress bar */}
          <img src="/images/createProfile/ProgressBar2.svg" alt="" className="progressBar"/>
        </div>

        <form className="createProfile-form" onSubmit={handleSubmit}>
          <div className="createProfile-form-field">
            <label className="createProfile-form-label">Location:</label>
            <input type="text" placeholder="E.g. San Jose State University" className="createProfile-form-input" value={location} onChange={locationChange}/>
          </div>

          <div className="createProfile-form-field">
            <label className="createProfile-form-label">Interest:</label>
            <input type="text" placeholder="E.g. Student, Software Engineer" className="createProfile-form-input" value={interests} onChange={interestsChange}/>
          </div>

          <div className="createProfile-form-field">
            <label className="createProfile-form-label">Bio:</label>
            <textarea 
              placeholder="Separate interests with a comma. E.g. STONKS, money, love" className="createProfile-textArea" value={bio} onChange={bioChange}></textarea>
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
