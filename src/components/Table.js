import React from 'react';

import TableRow from './TableRow';

const Table = (props) =>
    <table>
        <thead>
        <tr>
            <th onClick={() => props.onChangeSort('firstName')}>
                First Name
            </th>
            <th onClick={() => props.onChangeSort('lastName')}>
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
