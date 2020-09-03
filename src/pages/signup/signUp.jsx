import React from 'react';

function signup() {
  return (
    <div className="signUp">
      <form action="" className="signUp-form">
        <h1 className="signup-form-title">
          Join the Community
          <div className="name-input-container">
            <div className="firstName-container">
              <label>Firstname</label>
              <input type="text"/>
            </div>
            <div className="lastName-container">
              <label>Lastname</label>
              <input type="text"/>
            </div>
          </div>
        </h1>
      </form>
    </div>
  )
}

export default signup;