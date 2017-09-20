import React from 'react';
import PropTypes from 'prop-types';

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

TableItem.propTypes = {
    fname: PropTypes.string.isRequired,
    lname: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
};

TableItem.defaultProps = {
    fname: '',
    lname: '',
    city: '',
};

export default TableItem;