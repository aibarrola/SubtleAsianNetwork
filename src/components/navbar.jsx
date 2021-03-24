import React, {useEffect, useState} from "react";
import Axios from "axios";
import { useHistory} from "react-router-dom";
import { getJwt } from "./Helpers/jwt";
import UnLoggedNav from "./unLoggedNavbar";
import LoggedNav from "./loggedNav";

function Navbar() {

  // Retrieve user information from local storage
  let retrieved = localStorage.getItem("user");
  // Turn single line of text into usable JSON
  retrieved = JSON.parse(retrieved);

  // React hooks to store values and states
  const [token, setToken] = useState();
  const [user, setUser] = useState(retrieved);
  const [group, setGroup] = useState("");
  const [showNav, setNavBar] = useState(false);
  const [loggedInNav, setloggedIn] = useState(false);

  // History hook for use of page redirection
  let history = useHistory(); 

  // Do the following upon page load up
  useEffect(() => {
    // Check if there is a 'user' and 'token' var in browser storage
    if((localStorage.getItem('user') && localStorage.getItem('token'))){ 
      // If true then set login hook to be true
      setloggedIn(true);
      // Set token hook to JWT
      setToken(getJwt());
      // Send get request to get user information
      Axios.get(`https://san-api.herokuapp.com/users/${user.user_id}`).then(response => {
        // Set user hook to user data
        setUser(response.data);
        // set group to user's group
        setGroup(response.data.group);
      }
    );}
  }); 


  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  window.addEventListener("scroll", changeBackground); 

  // If user is logged in, then display logged in navbar
  if(loggedInNav) {
    return (
      <LoggedNav user_id = {user._id} group = {group}/>
      );
  } else {
    return (<UnLoggedNav/>);
  }
 
}

export default Navbar;