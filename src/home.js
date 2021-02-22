import React, { Component } from "react";
class home extends Component {
  render() {
    return (
      <div className="home-paragraph">
      {/* Completely unneccessary welcome img, but why not make this at least a little fun */}
        <img className = "home-pic" src="https://c.tenor.com/XK15GIbeZEEAAAAC/mark-wahlberg-where-do-i-go.gif"/>
        <br />
        <p>Try to go to the Auth Check link above and try to do a fetch.</p>
        <p>The route on the backend is authenticated, <br/> 
        meaning you need a token to get access!</p>
        <p>After you log in and get it to work, <br/> 
        feel free to pick apart this code to see how!</p>
      </div>
    );
  }
}

export default home;
