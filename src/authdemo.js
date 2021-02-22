import React, { Component } from "react";

let URL = "http://localhost:3000/things";
class AuthDemo extends Component {
  state = {
    things: [],
  };

  authorizedFetch = () => {
    fetch(URL, {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((things) => this.setState({ things }));
  };

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
      return this.authorizationMessage();
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
        <img src="https://i.gifer.com/2Y33.gif" />
        <br />
        <br />
        <button onClick={this.authorizedFetch}>Click me to fetch</button>
        <br />
        <br />
        {this.showFetchResponse()}
        {this.state.things.length > 1 ? (
          <h1 className="auth-taunt">
            You successfully fetched to an Authorized Path!!
          </h1>
        ) : null}
        <br />
        <br />
      </div>
    );
  }
}

export default AuthDemo;
