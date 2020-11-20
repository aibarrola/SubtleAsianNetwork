import React from 'react'
import { Link } from 'react-router-dom';

import './career.css';

import CareerSVG from './career.svg';

function Career() {
  return (
    <div className="career">
      <div className="career-container">
        <h2 className="career-title">Start your Career</h2>
        <img src={CareerSVG} className="careerSVG" alt="Career Section Graphic"/>
      </div>
    </div>
  )
}

export default Career;