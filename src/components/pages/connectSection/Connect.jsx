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
            Learn about other people in the Kickstarter program and expand your network. You will also get to see other groups and learn about what they are currently doing by asking questions or simply viewing their progress.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Connect;