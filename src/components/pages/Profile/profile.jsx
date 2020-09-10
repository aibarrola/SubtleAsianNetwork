import React from 'react'
import './profile.css'
import '../../baseGrid.css'
import Navbar from '../../navbar'
import Sidebar from '../../sidebar'

function profile(){
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

export default profile;