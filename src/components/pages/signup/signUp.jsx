import React from "react";
import "./signUp.css";
import Axios from "axios";
import { withRouter } from "react-router-dom"





class SignUp extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      firstName: null,
      lastName: null,
      email: null,
      birthDate: null,
      password: null,
      confirmPassword: null
    }
  }
  handleSubmit = (event) =>{
   
    event.preventDefault();
    /**if(validation == true){ */
      const user ={
        firstName : this.state.firstName,
        lastName :this.state.lastName,
        email: this.state.email,
        birthDate: this.state.birthDate,
        password: this.state.password
      }
       Axios.post('http://localhost:5000/users/register',user)
      .then(res=>console.log(res.data))
      .catch(err=> console.log("Error " +err));
      /**this.props.history.push('/profile');**/
      /***}else{
        //do nothing
      } ***/ 
  }
  handleChange = (event) =>{
    event.preventDefault();
    const {name, value} = event.target;//gets the name and vlaue of the specific event 
    //ie. if something was entered in firstName, firstName is returned as name and value of the firstname

    //handle validation here


    this.setState({[name]: value}); 
  }
  render(){ 
    return(
    <div className="signUp">
      <div className="signUp-container">
        <form action="" className="signUp-form" onSubmit = {this.handleSubmit}>
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
              <input type="date" placeholder="1/1/2020" className="field" name = "birthDate"onChange = {this.handleChange}/>
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
export default withRouter(SignUp);