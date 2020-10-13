import React from 'react'
import './navbar.css'

function Navbar(){
    return(
        <section>
            <div class="navbar">
                <a href="/networking"> Network </a>
                <a href="/group"> Groups </a>
                <a href="Profile"> Profile </a>
                {/* <a href="Home"> Home </a> */}
            </div>
        </section>
    )
}

export default Navbar;