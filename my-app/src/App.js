import React, {Component} from 'react';
import './App.css';
import { Router, browserHistory } from 'react-router';
import Register from './Register';
import Login from './Login'
import MainContainer from './MainContainer'

class App extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            loggedIn: false,
            id: 0
        }
    }
    register = async (data) => {
        try {
            const registerResponse = await fetch('http://localhost:3000/auth/register', {
                method: 'POST',
                credentials: 'include',// on every request we have to send the cookie
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const parsedResponse = await registerResponse.json();
            console.log(parsedResponse)
        } catch (err) {
            console.log(err)
        }
    }
    login = async (login) => {
        try {
            const loginResponse = await fetch('http://localhost:3000/auth/login', {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(login),
                headers: {
                   'Content-Type': 'application/json'
                }
            })

            const parsedResponse = await loginResponse.json();
            console.log("here's what we got back from logging in");
            console.log(parsedResponse);
            this.setState ({
                ...parsedResponse.data,
                loggedIn: true
            })
        } catch (err) {
            console.log(err)
        }
    }   
    render () {
        return (
            <div>
                <div>
                    {this.state.loggedIn ? <MainContainer username={this.state.username}/> : <Login login={this.login}/>}       
                </div>    
            </div>
        )
    }
}



export default App;
