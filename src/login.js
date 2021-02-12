import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";

class login extends Component {
    constructor(){
        super()
        this.state = {
            username: "",
            password: "",
            loggedIn: false,
            currentUser: ""
        }
    }


    handleChange = (event) => {
        const { name, value } = event.target
        
        this.setState({
            [name]: value
        })
    };


    login = (event) => {
        event.preventDefault()
        event.target.reset()

        const {username, password} = this.state

        const user = {username, password}

        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({user})
        })
        .then(r => r.json())
        .then(response => {
            // The token below will be used as a header for Authorization in your fetches
            // If you look in application controller we are requesting the header Authorization
            // Once it is recieved the token is decrypted and access to data is granted
            // localStorage.setItem("token", response.jwt)
            //The line below should also work
            localStorage.token = response.jwt

            //Console log here just to see what the data you get back looks like.
            this.props.setCurrentUser(response.user)

            this.setState({currentUser: response.user.username, loggedIn: true})
            //This example stores the user and loggedIn state here, but you could easily hold this
            // in a parent component and pass down currentUser as props.
            //This was just used to demonstrate quick and easy how it could work.
        })
    }



    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input type="text" name="username" placeholder="Username" onChange={this.handleChange} />
                    <input type="text" name="password" placeholder="Password" onChange={this.handleChange} />
                    <button type="submit">Submit</button>
                </form>
                <Link to="/">Home</Link><br/><br/>
            </div>
        );
    }
}

export default login;