import React from 'react'
import './profile.css'
import Navbar from '../../navbar'
import Sidebar from '../../sidebar'

function profile(){
    return(
        <section>
            <Navbar />
            <div className="profileContainer">
                <div className="sidebar">
                    <Sidebar />
                </div>
                <div className="profileMain">
                    <h1> Profile </h1>
                </div>
            </div>
        </section>
    )
}

export default profile;