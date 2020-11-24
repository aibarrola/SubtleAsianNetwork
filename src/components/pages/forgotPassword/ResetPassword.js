import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function ResetPassword() {

  const { token } = useParams();

  const [username, setUsername] = useState('');
  const [id, setID] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [update, setUpdate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(true);
  const [passMatch, setPassMatch] = useState(false);
  const [finish, setFinished] = useState(false);

  useEffect(() => {
    Axios.get(`https://san-api.herokuapp.com/users/reset/${token}`)
      .then(res => {
        if (res.data.message === 'valid token') {
          setUpdate(true);
          setLoading(false);
          setError(false);
          setUsername(res.data.firstName + ' ' + res.data.lastName);
          setID(res.data.userID);
        } else if (res.data.message === 'invalid token') {
          setUpdate(false);
          setError(true);
          setLoading(false);
        }
      });
  });

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleConfirmPassword(e) {
    setConfirmPass(e.target.value);
    if (password !== e.target.value) {
      setPassMatch(false)
    } else if (password === e.target.value) {
      setPassMatch(true);
    }
  }

  function handleResetSubmit(e) {

    e.preventDefault();

    if (passMatch) {
      Axios.post(`http://localhost:5000/users/reset/${id}`, {password})
        .then(res => {
          if (res.data.status === 'ok') {
            console.log(res.data.status);
            setFinished(true);
          } else {
            console.log(res.data.status);
          }
        })
    }
  }

  if (loading) {
    return (
      <div className="resetPassword">
        <div className="resetPassword-container">
          <h1>Loading</h1>
        </div>
      </div>
    )
  }

  if (finish) {
    return(
      <div className="resetPassword">
        <div className="resetPassword-container">
          <div className="resetPassword-header-container">
            <div className="resetPassword-header-title">
              <h1 className="resetPassword-header-title">Good news {username}!</h1>
              <p className="resetPassword-header-desc">You've successfully reset your password. Go ahead and click the button below to log in.</p>
            </div>
            <Link to='/login' className="resetPassword-main-btn">Login</Link>
          </div>
        </div>
      </div>
    )
  }

  if (!loading && !error && update) {
    return(
      <div className="resetPassword">
        <div className="resetPassword-container">
          <div className="resetPassword-header-container">
            <h1 className="resetPassword-header-title">Hello {username}!</h1>
            <p className="resetPassword-header-desc">Please fill out the form below inorder to reset your password. After this, you'll be good to go!</p>
          </div>
          <form className="resetPassword-form-container" onSubmit={handleResetSubmit}>
            <div className="resetPassword-form-field">
              <label className="resetPassword-form-label">New Password</label>
              <input type="password" className="resetPassword-form-input" onChange={handlePassword} value={password}/>
            </div>
            <div className="resetPassword-form-field">
              <label className="resetPassword-form-label">Confirm Password</label>
              <input type="password" className="resetPassword-form-input" onChange={handleConfirmPassword} value={confirmPass}/>
              {passMatch ? 
                <p className="confirmPass-status status-ok">Password matches</p>
              : 
                <p className="confirmPass-status status-fail">Passwords do not match</p>
              }
            </div>
            <div className="resetPassword-form-submit-container">
              <input type="submit" className="resetPassword-main-btn submit-reset" value="RESET PASSWORD"/>
            </div>
          </form>
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