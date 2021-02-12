import React, { Component } from "react";
import {
  Link
} from "react-router-dom";

class home extends Component {
  render() {
    return (
      <div>
      {/* completely unneccessary img, but why not make this at least a little fun */}
        <img src="https://lh3.googleusercontent.com/proxy/7fe8OuvfHYRRw6sVIHoC47aZ0Rm3nIByiNSaOoTAGxAKiqJs5PLFwXEs6zpm1iyotas-FktHkf6rrVnlff-_-JFJmzGsPJCwgLpBDTS-43O62Ov7Im2SWocFnqTnkYC3KlvfZOCW0N1vuCHSbg9DQPgOEcm4OFL4qOA"/>
        <br />
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
