import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

class signup extends Component {
  // State is used for a controlled form on User creation
  state = {
    username: "",
    password: "",
    email: "",
    created: false,
  };

  // Handle change event listener with a clean destructuring for value/name
  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  // Create user function, fairly straightforward POST
  createUser = (event) => {
    event.preventDefault();
    // Since data is stored in state you can clear the form immediately on submit
    event.target.reset();
    const { username, email, password } = this.state;

    let user = {
      username: username,
      email: email,
      password: password,
    };

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ user }),
    })
      .then((r) => r.json())
      .then((response) => {
        // We are reciving a status of "created" if the user is valid and saved to the database
        // This also shows how you can interact with the status of a response
        //  one *could* set some conditional effects on their site depending on if state.created is true
        if (response.status === "created") {
          this.setState({ created: true });
        }
      });
  };

  render() {
    return (
      <div>
        {this.state.created ? (
          <Redirect to="/login" />
        ) : (
          <div>
            <form onSubmit={this.createUser}>
              <input
                type="text"
                name="email"
                placeholder="Email"
                onChange={this.handleChange}
              />
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
          </div>
        )}
        <br />
        <br />
      </div>
    );
  }
}

export default signup;
