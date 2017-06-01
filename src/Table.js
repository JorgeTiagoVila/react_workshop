import React, { Component } from 'react';

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
                    this.props.users.map((user) => (
                        <tr>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        );
    }
}

export default Table;
