import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class login extends Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  login = (event) => {
    event.preventDefault();
    event.target.reset();

    const { username, password } = this.state;
    const user = { username, password };

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
        localStorage.token = response.jwt;
        this.props.setCurrentUser(response.user);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
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
        <br />
        <br />
      </div>
    );
  }
}

export default login;
