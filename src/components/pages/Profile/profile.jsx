import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import "./profile.css";
import "../../baseGrid.css";
import Navbar from "../../navbar";
import Sidebar from "../../sidebar";

import { getJwt } from "../../Helpers/jwt";

function Profile() {
  const [user, setUser] = useState([]);
  const [token, setToken] = useState();
  let { id } = useParams();

  useEffect(() => {
    Axios.get(`https://san-api.herokuapp.com/users/${id}`).then((response) => {
      setUser(response.data);
    });
  }, []);

  return (
    <section>
      <Navbar />
      <div className="header">
          <h1> {user.firstName} {user.lastName} </h1> 
          <h2> {user.profession} • {user.school} • {user.ethnicity} </h2>
      </div>

      <hr className="line" /> 
      <div className="profileContainer">

        <div className="sideProfile">
            <h2> About </h2>
            <h3> {user.bio} </h3> 
            <h2> Interests </h2>
            <h3> {user.interests} </h3>  
        </div>


        <div className="mainProfile"> 
            <h2>Recent Activity</h2>
            <h3> No activity here... </h3>
        </div>
        

    
      </div>
    </section>
  );
}

export default Profile;
