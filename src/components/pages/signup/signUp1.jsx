import React from "react";
import "./signUp1.css";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

function validateForm(errors) {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
}
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
      password: null,
      confirmPassword: null,
      emailCheckDouble: "",
      errors: {
        firstName: "",
        lastName: "",
        birthDate: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm(this.state.errors) == true) {
      const user = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
      };

      // Axios.post("http://localhost:5000/users/register", user)
      Axios.post("https://san-api.herokuapp.com/users/register", user)
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.user));
          this.props.history.push(`/user/${res.data.user.user_id}/cp/1`);
        })
        .catch((err) => {
          if (err.response.data.msg === "User already exist") {
            this.setState({ emailCheckDouble: "Email already exists" });
          } else {
            console.log(err);
          }
        });
    }
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
          value.length < 2 ? "2 Characters Minimum" : "";

        break;
      case "lastName":
        errors.lastName =
          value.length < 2 ? "2 Characters Minimum" : "";

        break;
      case "email":
        this.setState({ emailCheckDouble: "" });
        errors.email = validEmailRegex.test(value) ? "" : "Invalid Email";
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
      <div className="split right">
          <form action="" className="signUp-form" onSubmit={this.handleSubmit}>
            <h1 className="signUp-title">Project Leader</h1>
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
                {this.state.emailCheckDouble.length > 0 && (
                  <span className="error">{this.state.emailCheckDouble}</span>
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
          
        <div className="split left">
        <div className="centered">
        <h1 className="signUp-title">Project Member</h1>
        <Link to="/signup">
        <div className="submit-btn-container">
                <input
                    type="submit"
                    value="Register"
                    className="btn-register"
                    />
            </div>
            </Link>
        </div>
        </div>
    </div>
        
    );
  }
}
export default withRouter(SignUp1);
