import React from 'react'

import './footer.css'

import Logo from '../logo.png';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <img src={Logo} className="footerLogo" alt="Footer Logo"/>
      </div>
    </div>
  )
}

export default Footer;