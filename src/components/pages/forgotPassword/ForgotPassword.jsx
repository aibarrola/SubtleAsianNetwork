import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import './forgotPassword.css';
import Logo from '../landing/logo.png';
import ForgotPasswordSVG from './forgotPassword.svg';
import Email from './Email-icon.svg';

function ForgotPassword() {

  const [email, setEmail] = useState('');

  function emailChange(e) {
    setEmail(e.target.value);
  }

  function submitForgotPassword(e) {
    e.preventDefault();

    Axios.post(`https://san-api.herokuapp.com/users/forgotpassword`, {email})
      .then(res => console.log(res.data));
  }

  return (
    <div className="forgotPassword">
      <div className="logo-container">
        <img src={Logo} alt="Logo" className="forgotPassword-logo"/>
      </div>
      <div className="forgotPassword-container">
        <div className="forgotPassword-img">
          <img src={ForgotPasswordSVG} alt="Forgot Password Graphic"/>
        </div>
        <div className="forgotPassword-content">
          <div className="forgot-content-container">

            <div className="forgot-content-container-header">
              <h2 className="forgot-title">Forgot your password?</h2>
              <p className="forgot-caption">It happens to the best of us. Enter your email below and we'll help you out.</p>
            </div>

            <form className="forgotPassword-form">
              <div className="forgotPassword-form-field-container">
                <img src={Email} alt="Email icon"/>
                <div className="forgotPassword-form-field">
                  <label className="forgotPassword-form-field-label">Email Address</label>
                  <input type="email" className="forgotPassword-form-field-input" placeholder="Enter email here" onChange={emailChange} value={email}/>
                </div>
              </div>
              <div className="forgotPassword-form-btn-container">
                {/* <button className="reset-password-btn">RESET PASSWORD</button> */}
                <input type="submit" className="reset-password-btn" value="RESET PASSWORD" onClick={submitForgotPassword}/>
                <Link to="/login" className="btli">Back to log in</Link>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword;