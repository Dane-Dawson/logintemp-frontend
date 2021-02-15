import React, { Component } from "react";
import {
  Link
} from "react-router-dom";

class home extends Component {
  render() {
    return (
      <div>
      {/* completely unneccessary welcome img, but why not make this at least a little fun */}
        <img className = "home-pic" src="https://c.tenor.com/XK15GIbeZEEAAAAC/mark-wahlberg-where-do-i-go.gif"/>
        <br />
        <p>Try to go to the Auth Check link above and click the button.</p>
        <p>The route on the backend is authenticated, meaning you need a token to get access!</p>
        <p>After you log in and get it to work, pick apart this code to see how!</p>
        <br />
      </div>
    );
  }
}

export default home;
