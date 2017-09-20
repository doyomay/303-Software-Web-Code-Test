import React, {Component} from 'react';

class TableItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <tr>
                <td>
                    {this.props.fname}
                </td>
                <td>
                    {this.props.lname}
                </td>
                <td>{this.props.city}</td>
            </tr>
        )
    }
}

export default TableItem;