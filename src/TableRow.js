import React, { Component } from 'react';

class TableRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.firstName}</td>
                <td>{this.props.lastName}</td>
            </tr>

        );
    }
}

export default TableRow;
