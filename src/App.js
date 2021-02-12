import React, { Component } from "react";
import "./App.css";
import SignUp from "./signup";
import Login from "./login";
import Home from "./home";
import AuthDemo from "./authdemo";

import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  state = {
    user: {},
  };

  // If you open the devTools in chrome, check out the application tab and look at the LocalStorage section
  // You can see where our token will be stored. The log out simply sets that token to an empty string
  // and sets active user state as an empty object
  logOut = () => {
    this.setState({ user: {} });
    localStorage.token = "";
  };

  // A common approach to holding active/current user data on the front end is to have a user or currentUser state
  // that is populated with the user returned from your login function.
  setCurrentUser = (user) => {
    this.setState({ user });
  };

  // This is just a simple conditiional that checks if there is a user logged in, and if so it has a display of their name
  displayGreeting = () => {
    if (this.state.user.username) {
      return <h2>Welcome back {this.state.user.username}!</h2>;
    } else {
      return <h2>Please log in below</h2>;
    }
  };

  render() {
    return (
      <div>
        {this.displayGreeting()}
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/login">
              <Login setCurrentUser={this.setCurrentUser} />
            </Route>

            <Route exact path="/signup">
              <SignUp />
            </Route>

            <Route exact path="/auth">
              <AuthDemo />
            </Route>
          </Switch>
        </BrowserRouter>
        <br />
        <br />
        <button onClick={this.logOut}>Log Out</button>
      </div>
    );
  }
}

export default App;
