import React, {useState} from 'react'
import "./signUp.css";
import Axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

function CreateProfilePage2() {

  // React hooks to hold values
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Error hooks
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  // history is used for redirection of webpages
  // Going to be used once the user hits submit
  let history = useHistory();

  // Handle form field changes
  function handleChange(e) {
    // Deconstruct e.target
    // Get the NAME of the selected field and the VALUE with it
    // Ex. firstName : "Angelo"
    const { name, value} = e.target;

    // Switch statement to decide what value to change
    // Prevents having to create more than one handleChange function for multiple inputs
    switch (name) {
      case "firstName":
        setFirstName(value);  // Set firstName to value of field
        break;
      case "lastName":
        setLastName(value);  // Set lastName to value of field
        break;
      case "email":
        setEmail(value);    // Set email to value of field
        break;
      case "password":
        setPassword(value); // Set password to value of field

        // Check password with confirm password, if the same -> set error to false
        // Used to keep error checking working if the user for some reason does confirm password first
        if (value === confirmPassword) {
          setPasswordError(false);
        } else {
          setPasswordError(true);
        }
        break;
      case "confirmPassword":
        setConfirmPassword(value);

        // When confirm password starts to change immediately check if it's the same
        // Also activates the error for real time checking
        if (password !== value) { // If password is not the same as confirm password, set error to true
          setPasswordError(true);
        } else {                  // If password is the same as confirm password, set error to false
          setPasswordError(false);
        }
        break;
      default:
        // No default
    }
  }

  console.log(passwordError);

  // Handle submit button
  function handleSubmit(e) {
    // Prevent the form from reloading when submit button is pressed
    e.preventDefault();

    // User json
    const user = {
      firstName,
      lastName,
      email,
      password
    }

    Axios.post(`https://san-api.herokuapp.com/users/register`, user)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.newRegUser));
        history.push(`user/${res.data.newRegUser.user_id}/cp/1`);
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div className="register">
      <div className="register-container">
        <div className="register-content-container">

          {/* Start top signup ("Already have an account?" Button) */}
          <div className="top-signup">
            <p className="top-signup-caption">Already have an account?</p>
            <Link to='/login' className="top-signin-button">Sign In</Link>
          </div>
          {/* End top signup section */}

          <div className="split-signup">

            {/* Left side image container */}
            <div className="signUp-img-container">
              <img src="/images/signup/signup-character.svg" alt="SignUp Character" className="signUp-img"/>
            </div>
            {/* End left side image container */}

            <div className="signUp-form-container">

              {/* Jade logo container */}
              <div className="logo-container">
                <img src="/images/jade-logo.svg" alt="Jade Logo" className="logo-img"/>
                <p className="logo-caption">Jade</p>
              </div>
              {/* End Jade logo container */}

              {/* Subtitle container */}
              <div className="signUp-caption-container">
                <h2 className="signUp-caption">Join the Community!</h2>
                <p className="signUp-subcaption">Register your account</p>
              </div>
              {/* End subtitle container */}

              {/* Sign Up Form */}
              <form className="signUp-form" onSubmit={handleSubmit}>

                {/* First and last name container */}
                <div className="signUp-form-section-container">
                  <label className="signUp-form-field-label">Name</label>
                  <div className="signUp-form-name-fields">
                    <input type="text" name="firstName" placeholder="First Name" className="signUp-form-name-field" required value={firstName} onChange={handleChange}/>
                    <input type="text" name="lastName" placeholder="Last Name" className="signUp-form-name-field" required value={lastName} onChange={handleChange}/>
                  </div>
                </div>
                {/* End first and last name container */}

                {/* Signup email field */}
                <div className="signUp-form-section-container">
                  <label className="signUp-form-field-label">Email</label>
                  <input type="email" name="email" placeholder="angelo_is_sexy@gmail.com" className="signUp-form-field" required value={email} onChange={handleChange}/>
                </div>
                {/* End Signup email field */}

                {/* Signup password field */}
                <div className="signUp-form-section-container">
                  <label className="signUp-form-field-label">Password</label>
                  <input type="password" name="password" placeholder="8+ characters" className="signUp-form-field" required value={password} onChange={handleChange}/>
                </div>

                <div className="signUp-form-section-container">
                  <label className="signUp-form-field-label">Confirm Password</label>
                  <input type="password" name="confirmPassword" placeholder="8+ characters" className="signUp-form-field" required value={confirmPassword} onChange={handleChange}/>
                </div>

                {passwordError ? 
                  <div className="signUp-error-active">
                    <p className="signUp-error-text">Passwords don't match</p>
                  </div>
                  :
                  <div className="signUp-error-inactive">
                    <p className="signUp-error-text-inactive">Blank</p>
                  </div>
                }

                {/* End Signup password field */}

                {/* Signup Submit Button */}
                <div className="signUp-form-submit-btn-container">
                  <input type="submit" className="signUp-form-submit-btn" value="Register"/>
                </div>
                {/* End Submit Button */}

              </form>
              {/* End Signup Form */}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateProfilePage2;