import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addUser } from '../actions/users';

import Form from './Form';
import Table from './Table';

class Users extends Component {

    render() {
        return (
            <div>
                <Form onSubmit={this.props.actions.addUser} />
                <Table users={this.props.users} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    users: state.users
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        addUser
    }, dispatch)
});

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
