import React, { Component } from 'react';

import Form from './Form';
import Table from "./Table";

import logo from './logo.svg';
import './App.css';

class App extends Component {

    state = {
        users: []
    };

    handleSubmit = (firstName, lastName) => {
        this.setState((state) => {
            state.users.push({
                firstName,
                lastName
            });

            return state;
        });
    };

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <Form onSubmit={this.handleSubmit} />
                <Table users={this.state.users} />
            </div>
        );
    }
}

export default App;
