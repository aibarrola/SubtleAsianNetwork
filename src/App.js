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
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
