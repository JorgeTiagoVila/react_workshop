import React, { Component } from 'react';

import Form from './Form';
import Table from './Table';

class Users extends Component {

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
            <div>
                <Form onSubmit={this.handleSubmit} />
                <Table users={this.state.users} />
            </div>
        );
    }
}

export default Users;
