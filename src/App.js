import React, { Component } from 'react';
import './App.css';
import SignUp from './signup'
import Login from './login'
import Home from './home'
import AuthDemo from './authdemo'

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";


class App extends Component {

  state = {
    user: {}
  }

  logOut = () => {
    localStorage.token = "";
  };

  setCurrentUser = (user) => {
    this.setState({ user });
  };

  displayGreeting = () => { 
    if (this.state.user.username){
      return <h2>Welcome back {this.state.user.username}!</h2>
     } else {
       return <h2>Please log in below</h2>
     }
  }

  render() {
    return (
      <div>
      {this.displayGreeting()}
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home />
              </Route>

            <Route exact path='/login'>
              <Login setCurrentUser={this.setCurrentUser}/>
            </Route>

            <Route exact path='/signup'>
              <SignUp />
            </Route>

            <Route exact path='/auth'>
              <AuthDemo />
            </Route>

          </Switch>
        </BrowserRouter>
        <br />
        <br />
        <button onClick={this.logOut}>Log Out</button>
      </div>
    );
  }
}

export default App;

