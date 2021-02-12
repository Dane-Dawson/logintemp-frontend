import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";

  let URL = "http://localhost:3000/things"
class AuthDemo extends Component {
    state = {
        things: []
    }

    authorizedFetch = () => {
        console.log(localStorage.token)
        fetch(URL, {
        headers: { 
            // With JWT having tokens contain the term Bearer beforehand is convention
        'Authorization': `Bearer ${localStorage.token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }})
        .then(res => res.json())
        .then(things => this.setState({things}))
    }


    // This is just a simple respond that checks if 
    showFetchResponse = () => { 
        if (this.state.things.length > 1){
            return this.state.things.map(thing => {
                return <div><img src={thing.url}/><br/><br/></div>
            }) 
        } else {
           return  <h2>You  need authorization to view these gifs</h2>
        }
    }

    render() {
        return (
            <div>
                <button onClick = {this.authorizedFetch}>Click me to fetch</button><br/>
                {this.showFetchResponse()}
                <Link to="/">Home</Link><br/><br/>
            </div>
        );
    }
}

export default AuthDemo;