import React, { useState } from "react";
import Axios from 'axios';
import "./login.css";

function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    function emailChange(e) {
        setEmail(e.target.value);
    }

    function passChange(e) {
        setPassword(e.target.value);
    }

    function handleLogin(e) {
        e.preventDefault();

        const user = {
            email,
            password
        }

        Axios.post("https://san-api.herokuapp.com/users/auth", user)
            .then((res) => {
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('user', JSON.stringify(res.data.user));
                window.location.assign(`user/profile/${res.data.user.user_id}`);
            })
            .catch((err) => {
                console.log(err.msg);
            }) 
    }

    return(
        <div className = "logIn">
            <div className = "login-container">
                <form className = "login-form" onSubmit={handleLogin}>
                    <h1 className = "login-title">Welcome Back</h1>
                    <div className = "login-email-field">
                    <label className = "form-label">Email</label>
                    <input className = "login-input-field" type ="text" onChange={emailChange} value={email}/>
                    </div>
                    <div className = "login-password-field">
                    <label className = "login-form-label">Password</label>
                    <input className = "login-input-field" type ="password" onChange={passChange} value={password}/>
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
