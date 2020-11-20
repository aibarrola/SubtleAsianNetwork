import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function ResetPassword() {

  const { token } = useParams();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [update, setUpdate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(true);

  useEffect(() => {
    Axios.get(`http://localhost:5000/users/reset/${token}`)
      .then(res => {
        if (res.data.message === 'valid token') {
          setUpdate(true);
          setLoading(false);
          setError(false);
          console.log(res.data.message);
          setUsername(res.data.firstName + ' ' + res.data.lastName);
        } else if (res.data.message === 'invalid token') {
          setUpdate(false);
          setError(true);
          setLoading(false);
          console.log(res.data.message);
        }
      });
  });

  if (loading) {
    return (
      <div className="resetPassword">
        <div className="resetPassword-container">
          <h1>Loading</h1>
        </div>
      </div>
    )
  }

  if (!loading && !error && update) {
    return(
      <div className="resetPassword">
        <div className="resetPassword-container">
          <h1>{username}</h1>
        </div>
      </div>
    )
  }

  if (error) {
    return(
      <div className="resetPassword">
        <div className="resetPassword-container">
          <div className="resetPassword-header-container">
            <h1 className="resetPassword-header-title">Invalid Reset Link</h1>
            <p className="resetPassword-header-desc">The link you clicked in invalid. The links we send are only active for 30 minutes</p>
            <p className="resetPassword-header-desc">You can either go back to the homepage or request a new link.</p>
            <div className="resetPassword-btn-container">
              <Link to="/forgotpassword" className="resetPassword-main-btn">REQUEST NEW LINK</Link>
              <Link to="/" className="resetPassword-secondary-btn">HOME</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ResetPassword;