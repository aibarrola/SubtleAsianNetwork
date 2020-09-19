import React from "react";
import "./login.css";

function Login(){
    return(
        <div className = "logIn">
            <div className = "login-container">
                <form className = "login-form">
                    <h1 className = "login-title">Welcome Back</h1>
                    <div className = "login-email-field">
                    <label className = "form-label">Email</label>
                    <input className = "login-input-field" type ="text"/>
                    </div>
                    <div className = "login-password-field">
                    <label className = "login-form-label">Password</label>
                    <input className = "login-input-field"type ="password"/>
                    </div>
                    <div className ="signIn-button-container">
                        <button type = "submit" className = "signin-btn">Sign In</button>
                    </div>
                    <div className = "forgetPassword-container">
                    <label className ="forgetpass-label">Forgot Password?</label>
                </div>
                <div className = "signUp-label-container">
                    <label className="community-label">New to the community?</label>
                    <label className = "login-signup-label">Sign Up Now</label>
                </div>
                </form>
                
               

            </div>
           
        </div>
    );
}
export default Login;
