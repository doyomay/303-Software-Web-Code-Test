import React from 'react';

function TableItem({fname, lname, city}) {
    return (
        <tr>
            <td>
                {fname}
            </td>
            <td>
                {lname}
            </td>
            <td>{city}</td>
        </tr>
    )
}

export default TableItem;