import React, {useEffect, useState} from "react";
import Axios from "axios";
import { useHistory} from "react-router-dom";
import { getJwt } from "./Helpers/jwt";
import UnLoggedNav from "./unLoggedNavbar";
import LoggedNav from "./loggedNav";

function Navbar() {
  const [token, setToken] = useState();

  let retrieved = localStorage.getItem("user");
  retrieved = JSON.parse(retrieved);

  const [user, setUser] = useState(retrieved);
  const [group, setGroup] = useState("");
  const [showNav, setNavBar] = useState(false);
  const [loggedInNav, setloggedIn] = useState(false);

  let history = useHistory(); 

   useEffect(() => {
    if((localStorage.getItem('user') && localStorage.getItem('token'))){ 
    setloggedIn(true);
    setToken(getJwt());
    Axios.get(`https://san-api.herokuapp.com/users/${user.user_id}`).then(
      (response) => {
        setUser(response.data);
        setGroup(response.data.group);
      }
    );}
  }, []); 

 

   const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  window.addEventListener("scroll", changeBackground); 

  if(loggedInNav){
    return (
      <LoggedNav user_id = {user._id} group = {group}/>
      );
  }else{
    return (<UnLoggedNav/>);
  }
 
}

export default Navbar;
