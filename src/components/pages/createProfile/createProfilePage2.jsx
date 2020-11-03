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
  const [team, setTeam] = useState('5fa0be6605f4aa470804a2cc');

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
  const groupChange =(e)=>{
    setTeam(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();

    const updateOne = {
      location: location,
      interests: interests,
      bio: bio,
      group: team
    }
    const user = {
      userId: id
    }
    const config = {
      headers : {
        'x-auth-token': token
      }
    }
    
    Axios.post(`https://san-api.herokuapp.com/groups/user/${team}/add`,user)
    .then(res=>{
      console.log(res.data);
    })
    .catch(err=> console.log("Error " + err.msg))
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
            <input type="text" placeholder="E.g. San Jose, San Francisco" className="createProfile-form-input" value={location} onChange={locationChange}/>
          </div>

          <div className="createProfile-form-field">
            <label className="createProfile-form-label">Interest:</label>
            <input type="text" placeholder="E.g. Working out, watching anime, playing sports" className="createProfile-form-input" value={interests} onChange={interestsChange}/>
          </div>

          <div className="createProfile-form-field">
            <label className="createProfile-form-label">Bio:</label>
            <textarea 
              placeholder="Tell me about yourself!" className="createProfile-textArea" value={bio} onChange={bioChange}></textarea>
          </div>

          <div className="createProfile-form-field">
          <label className="createProfile-form-label">Team:</label>
            <select className="createProfile-form-input" onChange={groupChange}>
              <option value="5fa0be6605f4aa470804a2cc">Team App A</option>
              <option value = "5fa0b106cfead2209075a991">Team App B</option>
              <option value ="5fa0b10ccfead2209075a992">Team App C</option>
              <option value = "5fa0b15acfead2209075a994">Team Web A</option> 
              <option value = "5fa0b15fcfead2209075a995">Team Web B</option> 
              <option value = "5fa0b165cfead2209075a996" >Team Web C</option> 
              <option value ="5fa0b180cfead2209075a997">Discord</option>
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
