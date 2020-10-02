import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom';
import Axios from 'axios'
import './profile.css'
import '../../baseGrid.css'
import Navbar from '../../navbar'
import Sidebar from '../../sidebar'

import { getJwt } from "../../Helpers/jwt";


function Profile(){

    const [user, setUser] = useState([]);
    const [token, setToken] = useState();
    let {id} = useParams();


    useEffect(() => {
        Axios.get(`http://localhost:5000/users/${id}`)
            .then(response => {
                console.log(response.data);
                setUser(response.data);
            })
    }, [])

    return(
        <section>
            <Navbar />
            <div className="baseContainer">
                <div className="sideContainer">
                    <Sidebar />
                </div>
                <div className="mainContainer">
                    <div className="profileContainer">
                        <div className="profileMain">
                            <div className="profileMain header">
                                <h1> {user.firstName} {user.lastName} </h1>
                                <h3> {user.profession} • {user.ethnicity} • {user.location} </h3> 
                            </div>
                            <div className="profileMain about">
                                <h2> About </h2>
                                <h3> {user.bio} </h3> 
                                <h2> Interests </h2>
                                <h3> {user.interests} </h3>
                            </div> 
                            <div className="profileMain network">
                                <h2> Network </h2>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile;