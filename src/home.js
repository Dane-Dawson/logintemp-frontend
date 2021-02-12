import React, { Component } from "react";
import {
  Link
} from "react-router-dom";

class home extends Component {
  render() {
    return (
      <div>
      {/* completely unneccessary welcome img, but why not make this at least a little fun */}
        <img src="https://media.tenor.com/images/22f7fff1a213648197650e36205bb994/tenor.gif"/>
        <br />
        <br />
        {/* Simple use of the <Link/> component from react-router */}
        <Link to="/login">Login</Link>
        <br />
        <br />
        <Link to="/signup">SignUp</Link>
        <br />
        <br />
        <Link to="/auth">Auth Check</Link>

        {/*Below is how to get a similar effect without using a <Link/>  */}
        {/* 
                <br/>
                <a href="/signup">SignUp</a> 
                <br/><br/>
                <a href="/login">Login</a> 
                etc...*/}
      </div>
    );
  }
}

export default home;
