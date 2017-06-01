import React, { Component } from 'react';

import Form from './Form';
import Table from "./Table";

import logo from './logo.svg';
import './App.css';

class App extends Component {

    state = {
        firstName: '',
        lastName: ''
    };

    handleSubmit = (firstName, lastName) => {
        this.setState({
            firstName,
            lastName
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
                <Table />
            </div>
        );
    }
}

export default App;
