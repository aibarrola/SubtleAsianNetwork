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
  const [finished, setFinished] = useState(false);
  const [error, setError] = useState(false);

  function emailChange(e) {
    setEmail(e.target.value);
  }

  function submitForgotPassword(e) {
    e.preventDefault();

    Axios.post(`https://san-api.herokuapp.com/users/forgotpassword`, {email})
      .then(res => {
        if (res.data.status === 'ok') {
          setFinished(true);
          setError(false);
        } else {
          setFinished(false)
          setError(true);
        }
      });
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
              {finished && <p className="resetPassword-sent success-msg">Email successfully sent!</p>}
              {error && <p className="resetPassword-sent err-msg">Email successfully sent!</p>}
              <div className="forgotPassword-form-btn-container">
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