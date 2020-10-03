import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Landing from "./components/pages/landing";
import SignUp from "./components/pages/signup/signUp";
import Profile from "./components/pages/Profile/profile";
import CreateProfilePage1 from "./components/pages/createProfile/createProfilePage1";
import Networking from "./components/pages/Networking/networking";
import CreateProfilePage2 from "./components/pages/createProfile/createProfilePage2";
import LogIn from "./components/pages/login/login";
import EditProfile from "./components/pages/editProfile/editProfile";

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
        <Route path="/login">
          <LogIn />
        </Route>
        <Route path="/profile/:id">
          <Profile />
        </Route>
        <Route path="/networking">
          <Networking />
        </Route>
        <Route path="/createProfile1"></Route>
        <Route path="/user/:id/cp/1">
          <CreateProfilePage1 />
        </Route>
        <Route path="/user/:id/cp/2">
          <CreateProfilePage2 />
        </Route>
        <Route path="/editProfile">
          <EditProfile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
