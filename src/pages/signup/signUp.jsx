import React from "react";

function signup() {
  return (
    <div className="signUp">

      <form action="" className="signUp-form">

        <h1 className="signup-form-title"> Join the Community </h1>
          <div className="name-input-container">
            <div className="firstName-container">
              <label>Firstname</label>
              <input type="text" />
            </div>
            <div className="lastName-container">
              <label>Lastname</label>
              <input type="text" />
            </div>

            <div className="confirm-password-field">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className="field"
                min="8"
                placeholder="8 Character Minimum"
              />
            </div>

            <div className="submit-btn-container">
              <input type="submit" value="Register" className="btn-register" />
            </div>
          </div>
        </form>
      </div>
  
  );
}

export default signup;
