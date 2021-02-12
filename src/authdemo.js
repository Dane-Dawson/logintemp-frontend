import React, { Component } from "react";
import { Link } from "react-router-dom";

let URL = "http://localhost:3000/things";
class AuthDemo extends Component {
  state = {
    things: [],
  };

  // Below is an example of how to send a fetch including your JWT token for an authorized route
  authorizedFetch = () => {
    fetch(URL, {
      headers: {
        // With JWT having tokens contain the term Bearer beforehand is convention, and with how my
        // backend is setup I need the Authorization header to have the token as it's second value
        // this is pertinent to the decoded_token method in my application controller where I split
        // the auth header and grab the 1st index
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((things) => this.setState({ things }));
  };

  // This is just a simple response that checks if the state has any "things" in it, and if so it does a basic display
  showFetchResponse = () => {
    if (this.state.things.length > 1) {
      return this.state.things.map((thing) => {
        return (
          <div>
            <img src={thing.url} />
            <br />
            <br />
          </div>
        );
      });
    } else {
      return <h2>You need authorization to view these gifs</h2>;
    }
  };

  render() {
    return (
      <div>
      {/* Tie in the authorized fetch to a button */}
        <button onClick={this.authorizedFetch}>Click me to fetch</button>
        <br />
        {/* Because I want this to render any time there is a state change, I invoke it within my div */}
        {/* This only work for this purpose if your function returns HTML elements or React components */}
        {this.showFetchResponse()}
        <Link to="/">Home</Link>
        <br />
        <br />
      </div>
    );
  }
}

export default AuthDemo;
