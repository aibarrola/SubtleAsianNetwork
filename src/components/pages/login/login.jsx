import React, { useState } from "react";
import Axios from 'axios';
import { Link } from "react-router-dom";
import "./login.css";

function Login(){

    // React hooks to store values
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Handle any form changes
    function emailChange(e) {
        setEmail(e.target.value);
    }

    function passChange(e) {
        setPassword(e.target.value);
    }

    // Handle Login button
    function handleLogin(e) {
      // Prevent page from reloading upon submission
      e.preventDefault();

      // Create user JSON with email and password hook
      const user = {
          email,
          password
      }

      // Upon submission, send post request to backend
      Axios.post("https://san-api.herokuapp.com/users/auth", user)
          .then((res) => {
              // Save token value in browser local storage
              localStorage.setItem('token', res.data.token);
              // Save user JSON as a single text line in browser local storage
              localStorage.setItem('user', JSON.stringify(res.data.user));
              // Redirect user to their profile page
              window.location.assign(`user/profile/${res.data.user.user_id}`);
          })
          .catch((err) => {
              // If there is an error, console log it
              console.log(err.msg);
          }) 
    }

    return(
        <div className = "logIn">
            <div className = "login-container">
                {/* Login form container */}
                <form className = "login-form" onSubmit={handleLogin}>
                  <h1 className = "login-title">Welcome Back</h1>

                  {/* Email field */}
                  <div className = "login-email-field">
                    <label className = "form-label">Email</label>
                    <input className = "login-input-field" type ="text" onChange={emailChange} value={email}/>
                  </div>

                  {/* Password field */}
                  <div className = "login-password-field">
                    <label className = "form-label">Password</label>
                    <input className = "login-input-field" type ="password" onChange={passChange} value={password}/>
                  </div>

                  {/* Login button */}
                  <div className ="signIn-button-container">
                    <button type = "submit" className = "signin-btn">Sign In</button>
                  </div>

                  {/* Forgot password container */}
                  <div className = "forgetPassword-container">
                    <Link to="/forgotpassword" className ="forgetpass-label">
                      <label>Forgot Password?</label>
                    </Link>
                  </div>

                  {/* Signup button container */}
                  <div className = "signUp-label-container">
                    <label className="community-label">New to the community?</label>
                   <a href="/signup"> <label className = "login-signup-label"> Sign Up Now </label> </a>
                  </div>
                </form>
                {/* End login form */}
            </div>
           
        </div>
    );
}
export default Login;
