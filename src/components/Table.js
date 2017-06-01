import React from 'react';

import TableRow from './TableRow';

const Table = (props) =>
    <table style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
        <thead>
        <tr>
            <th style={{ border: '1px solid black', cursor: 'pointer' }} onClick={() => props.onChangeSort('firstName')}>
                First Name
            </th>
            <th style={{ border: '1px solid black', cursor: 'pointer' }} onClick={() => props.onChangeSort('lastName')}>
                Last Name
            </th>
        </tr>
        </thead>
        <tbody>
        {
            props.users.map((user, index) =>
                <TableRow key={user.id} {...user} />
            )
        }
        </tbody>
    </table>;

export default Table;
