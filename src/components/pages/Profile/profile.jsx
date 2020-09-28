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
                    <div className="profileContainer">
                        <div className="profileMain">
                            <div className="profileMain header">
                                <h1> Angelo Ibarrola  </h1>
                                <h3> Student • Filipino • San Jose  </h3> 
                            </div>
                            <div className="profileMain about">
                                <h2> About </h2>
                                <h3> Student leader with a love for community-building and web development. Passionate about building valuable products. </h3> 
                                <h2> Interests </h2>
                                <h3> Volleyball, leadership, magic </h3>
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