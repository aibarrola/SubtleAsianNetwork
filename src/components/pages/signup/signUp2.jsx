import React from 'react'
import "./signUp2.css";
import Axios from 'axios';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

function CreateProfilePage2() {
  return (
    <div className="register">
      <div className="register-container">
        <div className="register-content-container">
          <div className="top-signup">
            <p className="top-signup-caption">Already have an account?</p>
            <Link to='/login' className="top-signin-button">Sign In</Link>
          </div>
          <div className="split-signup">
            <div className="signUp-img-container">
              <img src="/images/signup/signup-character.svg" alt="SignUp Character" className="signUp-img"/>
            </div>
            <div className="signUp-form-container">
              <div className="logo-container">
                <img src="/images/jade-logo.svg" alt="Jade Logo" className="logo-img"/>
                <p className="logo-caption">Jade</p>
              </div>
              <div className="signUp-caption-container">
                <h2 className="signUp-caption">Join the Community!</h2>
                <p className="signUp-subcaption">Register your account</p>
              </div>
              <form className="signUp-form">

                <div className="signUp-form-section-container">
                  <label className="signUp-form-field-label">Name</label>
                  <div className="signUp-form-name-fields">
                    <input type="text" name="firstName" placeholder="First Name" className="signUp-form-name-field"/>
                    <input type="text" name="lastName" placeholder="Last Name" className="signUp-form-name-field"/>
                  </div>
                </div>

                <div className="signUp-form-section-container">
                  <label className="signUp-form-field-label">Email</label>
                  <input type="email" name="email" placeholder="angelo_is_sexy@gmail.com" className="signUp-form-field"/>
                </div>

                <div className="signUp-form-section-container">
                  <label className="signUp-form-field-label">Password</label>
                  <input type="password" name="password" placeholder="8+ characters" className="signUp-form-field"/>
                </div>

                <div className="signUp-form-submit-btn-container">
                  <input type="submit" className="signUp-form-submit-btn" value="Register"/>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateProfilePage2;