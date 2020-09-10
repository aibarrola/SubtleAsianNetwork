import React from "react";
import "./signUp.css";








export default class SignUp extends React.Componenet {
  constructor(props){
    super(props);
    this.state ={
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      confirmPassword: null
    }
  }
  handleChange = (event) =>{
    event.preventDefault();
    const {name, value} = event.target;//gets the name and vlaue of the specific event 
    //ie. if something was entered in firstName, firstName is returned as name and value of the firstname

    //handle validation here


    this.setState({[name]: value}) 
  }
  render(){ 
    return(
    <div className="signUp">
      <div className="signUp-container">
        <form action="" className="signUp-form">
          <h1 className="signUp-title">Join the Community</h1>
          <div className="signUp-form-fields">
            <div className="signUp-nameFields">
              <div className="firstName-field flex-column">
                <label className="form-label">First Name</label>
                <input type="text" name = "firstName" placeholder="Tommy" className="field" onChange = {this.handleChange}/>
              </div>
              <div className="lastName-field flex-column">
                <label className="form-label">Last Name</label>
                <input type="text" placeholder="Nguyen" name = "lastName" className="field" onChange = {this.handleChange}/>
              </div>
            </div>

            <div className="birthday-field">
              <label className="form-label">Birth Date</label>
              <input type="date" placeholder="1/1/2020" className="field" name = "birthdate"onChange = {this.handleChange}/>
            </div>

            <div className="email-field">
              <label className="form-label">Email</label>
              <input
                name = "email"
                type="email"
                placeholder="john.g.nguyen@gmail.com"
                className="field"
                onChange = {this.handleChange}/>
            </div>

            <div className="password-field">
              <label className="form-label">Password</label>
              <input
                name = "password"
                type="password"
                className="field"
                min="8"
                placeholder="8 Character Minimum"
                onChange = {this.handleChange}
              />
            </div>

            <div className="confirm-password-field">
              <label className="form-label">Confirm Password</label>
              <input
                name = "confirmPassword"
                type="password"
                className="field"
                min="8"
                placeholder="8 Character Minimum"
                onChange = {this.handleChange}
              />
            </div>

            <div className="submit-btn-container">
              <input type="submit" value="Register" className="btn-register" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
}
