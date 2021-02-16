import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

class signup extends Component {
  // State is used for a controlled form on User creation
  //   If you wanted to do a password confirmation you can also choose to do the logic here to check if
  //      password and passwordConfirmation match before sending the POST
  state = {
    username: "",
    password: "",
    email: "",
    created: false,
    errorMessage: ""
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
        //  One *could* set some conditional effects on their site depending on if state.created is true
        if (response.status === "created") {
          this.setState({ created: true, errorMessage: "" });
        } 
    })
    .catch(response => this.setState({ errorMessage: "Uh-oh! It didn't work...Make sure your server is running!"}))
  };

  render() {
    return (
      <div>
        {this.state.created ? (
          <Redirect to="/login" />
        ) : (
          <div>
          <div className="please-log-in"><p >{this.state.errorMessage}</p></div>
            <br />
            <form onSubmit={this.createUser}>
              <input
                type="text"
                name="email"
                placeholder="Email"
                onChange={this.handleChange}
              />
              <br />
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={this.handleChange}
              />
              <br />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
              <br />
              <br />
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
