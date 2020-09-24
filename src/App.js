import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./App.css";
import Landing from "./components/pages/landing";
import SignUp from "./components/pages/signup/signUp";
import Profile from "./components/pages/Profile/Profile";
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
        <Route path="/profile/:id">
          <Profile />
        </Route>
        <Route path="/user/:id/cp/1">
          <CreateProfilePage1 />
        </Route>
        <Route path="/user/:id/cp/2">
          <CreateProfilePage2 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
