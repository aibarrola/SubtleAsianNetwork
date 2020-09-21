import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Landing from "./components/pages/landing";
import SignUp from "./components/pages/signup/signUp";
import Profile from "./components/pages/Profile/profile";
import CreateProfilePage1 from './components/pages/createProfile/CreateProfilePage1';
import CreateProfilePage2 from './components/pages/createProfile/CreateProfilePage2';
import LogIn from "./components/pages/login/login";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path = "/login">
          <LogIn/>
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/user/:id/createprofile/1">
          <CreateProfilePage1 />
        </Route>
        <Route path="/user/:id/createprofile/2">
          <CreateProfilePage2 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
