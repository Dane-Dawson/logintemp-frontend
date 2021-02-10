import React, { Component } from 'react';
import {Redirect, Link} from "react-router-dom";

class signup extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            email: "",
            created: false
        }
    }


    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })
    };


    createUser = (event) => {
        event.preventDefault()
        event.target.reset()
        const { username, email, password } = this.state

        let user = {
            username: username,
            email: email,
            password: password
        }

        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ user })
        })
            .then(r => r.json())
            .then(response => {
                // We are reciving a status of "created" if the user is valid and saved to the database
                if (response.status === "created") {
                    this.setState({ created: true })
                }
            })

    }





    render() {
        return (
            <div>
                {this.state.created ? <Redirect to="/login" /> : <div>
                    <form onSubmit={this.createUser}>
                        <input type="text" name="email" placeholder="Email" onChange={this.handleChange} />
                        <input type="text" name="username" placeholder="Username" onChange={this.handleChange} />
                        <input type="text" name="password" placeholder="Password" onChange={this.handleChange} />
                        <button type="submit">Submit</button>
                    </form>
                </div>}
                <Link to="/">Home</Link><br/><br/>
            </div>
        );
    }
}

export default signup;