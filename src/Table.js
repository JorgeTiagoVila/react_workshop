import React from 'react';

import TableRow from './TableRow';

const Table = (props) =>
    <table>
        <thead>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
        </tr>
        </thead>
        <tbody>
        {
            props.users.map((user, index) =>
                <TableRow key={index} {...user} />
            )
        }
        </tbody>
    </table>;

export default Table;
