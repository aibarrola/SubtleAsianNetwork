import React from 'react';

import './connect.css'
import connectSVG from './connect.svg'

function Connect() {
  return (
    <div className="connect-container">
      <div className="connectSection-container">
        <img src={connectSVG} className="connectSVG" alt="Connect Section Graphic"/>
        <div className="connectSection-info-container">
          <h2 className="connectSection-title">Connect with Others</h2>
          <p className="connectSection-info">
            Learn about other people in the Kickstarter program and expand your network. View other groups and learn about what they are currently working on 
          </p>
        </div>
      </div>
    </div>
  )
}

export default Connect;