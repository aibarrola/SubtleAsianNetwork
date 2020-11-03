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
          <h2 className="headerInfo"> {user.profession} • {user.school} • {user.ethnicity} </h2>
      </div>

      <hr className="line" /> 
      <div className="profileContainer">

        <div className="sideProfile">
            <h2 className="sideHeader"> About </h2>
            <h3 className="sideInfo"> {user.bio} </h3> 
            <h2 className="sideHeader"> Interests </h2>
            <h3 className="sideInfo"> {user.interests} </h3>  
        </div>


        <div className="mainProfile"> 
            <h2 className="mainHeader">Recent Activity</h2>
            <h3 className="mainInfo"> No activity here... </h3>
        </div>
        

    
      </div>
    </section>
  );
}

export default Profile;
