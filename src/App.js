import React, { Component } from 'react';
import './App.css';
import SignUp from './signup'
import Login from './login'
import Home from './home'
import Auth from './auth'

import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";


class App extends Component {




  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home />
              </Route>

            <Route exact path='/login'>
              <Login />
            </Route>

            <Route exact path='/signup'>
              <SignUp />
            </Route>

            <Route exact path='/auth'>
              <Auth />
            </Route>

          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

