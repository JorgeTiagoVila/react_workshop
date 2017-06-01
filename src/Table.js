import React, { Component } from 'react';

import TableRow from './TableRow';

class Table extends Component {
    render() {
        return (
            <table>
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.users.map((user, index) =>
                        <TableRow key={index} {...user} />
                    )
                }
                </tbody>
            </table>
        );
    }
}

export default Table;
