import React from 'react';

import './trackProgress.css'

import formSVG from './formSVG.svg';
import shareSVG from './shareSVG.svg';
import groupSVG from './groupSVG.svg';

function TrackProgress() {
  return (
    <div className="progress">
      <h2 className="progress-title">How it works</h2>
      <div className="progress-container">
        <img src={formSVG} className="sizeSVG" alt="Create Form Graphic"/>
        <div className="progress-info-container">
          <p className="progress-subtitle">
          Create a form
          </p>
          <p className="progress-info">
          Set up is easy. Let Jade know what kind of questions you want to ask your group members.
          </p>
        </div>
        
      </div>
      <div className="progress-container2">
        <img src={shareSVG} className="sizeSVG" alt="Create Form Graphic"/>
        <div className="progress-info-container">
          <p className="progress-subtitle">
          Share your link
          </p>
          <p className="progress-info">
          Share your Jade link to the group members so they can fill our your form.
          </p>
        </div>
        
      </div>

      <div className="progress-container3">
        <img src={groupSVG} className="sizeSVG" alt="Create Group Graphic"/>
        <div className="progress-info-container">
          <p className="progress-subtitle">
          Create your group
          </p>
          <p className="progress-info">
          Once group members are finished, you can efficiently put them in groups.
          </p>
        </div>
        
      </div>

    </div>

    
  )
}

export default TrackProgress;