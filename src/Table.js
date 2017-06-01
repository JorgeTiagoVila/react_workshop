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
                <tr>
                    <td>{this.props.firstName}</td>
                    <td>{this.props.lastName}</td>
                </tr>
                </tbody>
            </table>
        );
    }
}

export default Table;
