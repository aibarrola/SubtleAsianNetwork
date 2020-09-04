import React from 'react';
import './signUp.css';

function signup() {
  return (
    <div className="signUp">
      <div className="signUp-container">
        <form action="" className="signUp-form">
          <h1 className="signUp-title">Join the Community</h1>
          <div className="signUp-form-fields">

            <div className="signUp-nameFields">
              <div className="firstName-field flex-column">
                <label className="form-label">First Name</label>
                <input type="text" placeholder="Tommy" className="field"/>
              </div>
              <div className="lastName-field flex-column">
                <label className="form-label">Last Name</label>
                <input type="text" placeholder="Nguyen" className="field"/>
              </div>
            </div>

            <div className="birthday-field">
              <label className="form-label">Birth Date</label>
              <input type="date" placeholder="1/1/2020" className="field"/>
            </div>

            <div className="email-field">
              <label className="form-label">Email</label>
              <input type="email" placeholder="john.g.nguyen@gmail.com" className="field"/>
            </div>

            <div className="password-field">
              <label className="form-label">Password</label>
              <input type="password" className="field" min="8" placeholder="8 Character Minimum"/>
            </div>

            <div className="confirm-password-field">
              <label className="form-label">Confirm Password</label>
              <input type="password" className="field" min="8" placeholder="8 Character Minimum"/>
            </div>

            <div className="submit-btn-container">
              <input type="submit" value="Register" className="btn-register"/>
            </div>

          </div>
        </form>
      </div>
    </div>
  )
}

export default signup;