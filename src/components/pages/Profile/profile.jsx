import React from 'react'
import './profile'
import Navbar from '../../navbar'

function profile(){
    return(
        <section className="profileContainer">
            <Navbar />
            <div>
                <h1> Profile </h1>
            </div>
        </section>
    )
}

export default profile;