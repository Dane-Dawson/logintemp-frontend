import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class login extends Component {
  // The only state "required" for this component is the username and password for the controlled form
  // The other states are examples of things that could be tracked in state with a log in
  // This will change drastically depending on your personal choices you make in designing your site
  state = {
    username: "",
    password: "",
    loggedIn: false,
    currentUser: "",
  };

  //This is just our controlled form handleChange event listener used to take in our login form
  //    info and save it to state for us to use with our fetches, using a little destructuring to create variables
  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  //The login function, take note the endpoint it is targeting and what it is sending in
  //   This is DIRECTLY related to how you set up your back end routes and methods
  login = (event) => {
    event.preventDefault();
    // Because our form values are stored in state, we can immediately clear the form on submit
    event.target.reset();
    // Example of destructuring the state into variables
    const { username, password } = this.state;
    // And using those variables to create a user object
    const user = { username, password };
    // This follows our login route we specified in our backend
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user }),
    })
      .then((r) => r.json())
      .then((response) => {
        // The token below will be used as a header for Authorization in your fetches
        // We packaged the token into our response from the login method in our backend
        //      and immediately save it locally (if you open your application tab in chrome devTools
        //      and look at your local storage and you should see it after a successful login!)
        localStorage.token = response.jwt;

        //The line below should also work, if you ever see this syntax
        // localStorage.setItem("token", response.jwt)

        //This example below stores the user and loggedIn state here, but you could easily hold this
        // in a parent component and pass down currentUser as props.
        this.setState({ currentUser: response.user.username, loggedIn: true });

        //Below I use a very basic example of doing just that by setting the current user in a parent 
        //      on successful login
        this.props.setCurrentUser(response.user);

      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        <br />
        <br />
      </div>
    );
  }
}

export default login;
