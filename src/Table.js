import React, { Component } from 'react';

class Table extends Component {
    state = {
        firstName: 'John',
        lastName: 'Doe'
    };

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
                <tr>
                    <td>{this.state.firstName}</td>
                    <td>{this.state.lastName}</td>
                </tr>
                </tbody>
            </table>
        );
    }
}

export default Table;
