import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import './profile.css'
import '../../baseGrid.css'
import Navbar from '../../navbar'
import Sidebar from '../../sidebar'

function Profile(){

    const [user, setUser] = useState();

    useEffect(() => {
        Axios.get('http://localhost:5000/user/:id')
            .then(response => {
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
                    <h1> Profile </h1>
                </div>
            </div>
        </section>
    )
}

export default Profile;