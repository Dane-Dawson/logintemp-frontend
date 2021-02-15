import React, { Component } from "react";
import { Link } from "react-router-dom";

let URL = "http://localhost:3000/things";
class AuthDemo extends Component {
    // I made the model in the backend named Thing for no reason other than it amuses me and it's a neutral word
    // Ideally you'd set the state to describe what it is holding.
  state = {
    things: [],
  };
 
  // Below is an example of how to send a fetch including your JWT token for an authorized route
  authorizedFetch = () => {
      fetch(URL, {
        // If you look in application controller on the backend we are requesting the header Authorization
        //    Once it is recieved the token is decrypted and access to data is granted
      headers: {
        // With JWT having tokens contain the term Bearer beforehand is convention, and with how my
        //      backend is setup I need the Authorization header to have the token as it's second value.
        //      This is pertinent to the decoded_token method in my application controller where I split
        //      the auth header and grab the 1st index of that array.
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((things) => this.setState({ things }));
  };

  // This is just a simple response that checks if the state has any "things" in it, and if so it does a render
  //   of the gifs as imgs. This is a little lazy, I would recommend using a component.
  showFetchResponse = () => {
    if (this.state.things.length > 1) {
      return this.state.things.map((thing) => {
        return (
          <span key={thing.id}>
            <img src={thing.url} />
          </span>
        );
      });
    } else {
      return this.authorizationMessage()
    }
  };

  authorizationMessage = () => {
    return (
      <div className="auth-taunt">
        <h2>You need authorization to click that button...</h2>
        <h3>Try all you'd like!</h3>
        {this.props.loggedIn ? (
          <h3>Oh wait...You ARE logged in! Give it a whirl!</h3>
        ) : null}
      </div>
    );
  };

  render() {
    return (
      <div>
      {/* Another image just to lighten the mood */}
        <img src="https://i.gifer.com/2Y33.gif" />
        <br />
        <br />
        {/* Tie in the authorized fetch to an onClick event with a button */}
        <button onClick={this.authorizedFetch}>Click me to fetch</button>
        <br />
        <br />
        {/* Because I want this to check if there are 'things' and render accordingly any time  */}
        {/* there is a state change, I invoke it within my div so it triggers any time there is a re-render. */}
        {/* This only works for this purpose if your function returns HTML elements or React components */}
        {this.showFetchResponse()}
        {this.state.things.length > 1 ? (
          <h1>You successfully fetched to an Authorized Path!!</h1>
        ) : null}
        <br />
        <br />
      </div>
    );
  }
}

export default AuthDemo;
