import React from 'react';

const TableRow = (props) =>
    <tr>
        <td style={{ border: '1px solid black' }}>{props.firstName}</td>
        <td style={{ border: '1px solid black' }}>{props.lastName}</td>
    </tr>;

export default TableRow;
