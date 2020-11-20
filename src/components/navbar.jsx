import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import "./navbar.css";

import { getJwt } from "./Helpers/jwt";

function Navbar() {
  const [token, setToken] = useState();

  let retrieved = localStorage.getItem("user");
  retrieved = JSON.parse(retrieved);

  const [user, setUser] = useState(retrieved);
  const [group, setGroup] = useState("");

  let history = useHistory();

  useEffect(() => {
    setToken(getJwt());
    Axios.get(`https://san-api.herokuapp.com/users/${user.user_id}`).then(
      (response) => {
        setUser(response.data);
        setGroup(response.data.group);
      }
    );
  }, []);

  function logout() {
    localStorage.clear();
  }

  return (
    <section>
      <div class="navbar">
        <a href="/" onClick={logout}>
          Logout
        </a>
        <a href="/networking"> Network </a>
        <a href={`/group/${group}`}> Groups </a>
        <a href={`/user/profile/${retrieved.user_id}`}> My Profile </a>
        {/* <a href="Home"> Home </a> */}
      </div>
    </section>
  );
}

export default Navbar;
