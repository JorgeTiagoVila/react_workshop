import React from 'react';

import Form from './Form';
import Table from './Table';

const Users = (props) =>
    <div>
        <Form onSubmit={props.actions.addUser} />
        <Table
            onChangeSort={props.actions.sortUsersBy}
            users={props.users}
        />
    </div>;

export default Users;
