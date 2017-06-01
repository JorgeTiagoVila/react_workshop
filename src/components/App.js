import React, { Component } from 'react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from '../reducers';

import Users from "./Users";

import logo from '../logo.svg';
import './App.css';

class App extends Component {

    store = createStore(reducers);

    render() {
        return (
            <Provider store={this.store}>
                <div className="App">
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h2>Welcome to React</h2>
                    </div>
                    <Users />
                </div>
            </Provider>
        );
    }
}

export default App;
