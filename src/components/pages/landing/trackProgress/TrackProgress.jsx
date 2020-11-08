import React from 'react';

import './trackProgress.css'

import progressSVG from './progressSVG.svg';

function TrackProgress() {
  return (
    <div className="progress">
      <div className="progress-container">
        <div className="progress-info-container">
          <h2 className="progress-title">Track Team Progress</h2>
          <p className="progress-info">
          You will be able to edit and customize your own team page. This will be your main hub for sending out announcements, asking questions, and assigning tasks. All customized for you to make it as easy as possible to create an efficient workflow for your project!
          </p>
        </div>
        <img src={progressSVG} className="progressSVG" alt="Progress Section Graphic"/>
      </div>
    </div>
  )
}

export default TrackProgress;