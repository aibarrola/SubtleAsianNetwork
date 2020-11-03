import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import './navbar.css'

import { getJwt } from "./Helpers/jwt";

function Navbar(){

    const [token, setToken] = useState();

    let retrieved = localStorage.getItem('user');
    retrieved = JSON.parse(retrieved);

    const [user, setUser] = useState(retrieved);

    let history = useHistory();

    useEffect(() => {
        setToken(getJwt());
        console.log(user);
    }, [])

    function logout() {
        localStorage.clear();
    }

    return(
        <section>
            <div class="navbar">
                <a href="/networking"> Network </a>
                <a href={`/group/${user.group}`}> Groups </a>
                <a href={`/user/profile/${user.user_id}`}> My Profile </a>
                <a href="/" onClick={logout}>Logout</a>
                {/* <a href="Home"> Home </a> */}
            </div>
        </section>
    )
}

export default Navbar;