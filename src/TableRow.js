import React, { Component } from 'react';

class TableRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.user.firstName}</td>
                <td>{this.props.user.lastName}</td>
            </tr>

        );
    }
}

export default TableRow;
