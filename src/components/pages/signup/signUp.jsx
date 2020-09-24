import React from "react";
import "./signUp.css";
import Axios from "axios";
import { withRouter } from "react-router-dom";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      birthDate: null,
      password: null,
      confirmPassword: null,
      errors: {
        firstName: "",
        lastName: "",
        birthDate: "",
        email: "",
        password: "",
        confirmPassword: "",
      }
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    /**if(validation == true){ */
    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      birthDate: this.state.birthDate,
      password: this.state.password,
    };
    Axios.post("http://localhost:5000/users/register", user)
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        this.props.history.push(`/user/${res.data.user.user_id}/createprofile/1`);
      })
      .catch(err => console.log(err));
    /**this.props.history.push('/profile');**/
    /***}else{
        //do nothing
      } ***/
  };
  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target; //gets the name and vlaue of the specific event
    //ie. if something was entered in firstName, firstName is returned as name and value of the firstname

    //handle validation here
    let errors = this.state.errors;

    switch (name) {
      case "firstName":
        errors.firstName =
          value.length < 2 ? "Please enter 2 or more charecters" : "";

        break;
      case "lastName":
        errors.lastName =
          value.length < 2 ? "Please enter 2 or more charecters" : "";

        break;
      case "birtdate":
        errors.birthdate = "This field is required";

        break;
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "password":
        errors.password = value.length < 8 ? "8 Characters Minimum" : "";
        break;
      case "confirmPassword":
        errors.confirmPassword =
          value === this.state.password ? "" : "Passwords do not match";
        break;
        //no default
    }

    this.setState({ [name]: value });
  };
  render() {
    const { errors } = this.state;
      return (
        <div className="signUp">
          <div className="signUp-container">
            <form action="" className="signUp-form" onSubmit={this.handleSubmit}>
              <h1 className="signUp-title">Join the Community</h1>
              <div className="signUp-form-fields">
                <div className="signUp-nameFields">
                  <div className="firstName-field flex-column">
                    <label className="form-label">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Tommy"
                      className={
                        errors.firstName.length > 0 ? "field-Error" : "field"
                      }
                      onChange={this.handleChange}
                      noValidate
                    />
                    {errors.firstName.length > 0 && (
                      <span className="error">{errors.firstName}</span>
                    )}
                  </div>
                  <div className="lastName-field flex-column">
                    <label className="form-label">Last Name</label>
                    <input
                      type="text"
                      placeholder="Nguyen"
                      name="lastName"
                      className={
                        errors.lastName.length > 0 ? "field-Error" : "field"
                      }
                      onChange={this.handleChange}
                    />
                    {errors.lastName.length > 0 && (
                      <span className="error">{errors.lastName}</span>
                    )}
                  </div>
                </div>

                <div className="birthday-field">
                  <label className="form-label">Birth Date</label>
                  <input
                    type="date"
                    placeholder="01/01/2020"
                    className="field"
                    name="birthdate"
                    onChange={this.handleChange}
                  />
                  {!Date.parse(this.state.birthdate) && (
                    <span className="error">{errors.birthday}</span>
                  )}
                </div>

                <div className="email-field">
                  <label className="form-label">Email</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="john.g.nguyen@gmail.com"
                    /* className={
                    validEmailRegex.test(this.state.email)
                      ? "field"
                      : "field-Error"
                  } */
                    className="field"
                    onChange={this.handleChange}
                  />
                  {errors.email.length > 0 && (
                    <span className="error">{errors.email}</span>
                  )}
                </div>

                <div className="password-field">
                  <label className="form-label">Password</label>
                  <input
                    name="password"
                    type="password"
                    className={
                      errors.password.length > 8 ? "field-Error" : "field"
                    }
                    min="8"
                    placeholder="8 Character Minimum"
                    onChange={this.handleChange}
                  />
                  {errors.password.length > 0 && (
                    <span className="error">{errors.password}</span>
                  )}
                </div>

                <div className="confirm-password-field">
                  <label className="form-label">Confirm Password</label>
                  <input
                    name="confirmPassword"
                    type="password"
                    /* className={
                    errors.confirmPassword.length > 0 &&
                    errors.confirmPassword === this.state.password
                      ? "field"
                      : "field-Error"
                  } */
                    className="field"
                    min="8"
                    placeholder="8 Character Minimum"
                    onChange={this.handleChange}
                  />
                  {errors.confirmPassword.length > 0 && (
                    <span className="error">{errors.confirmPassword}</span>
                  )}
                </div>

                <div className="submit-btn-container">
                  <input
                    type="submit"
                    value="Register"
                    className="btn-register"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      );
  }
}
export default withRouter(SignUp);
