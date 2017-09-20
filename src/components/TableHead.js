import React, {Component} from 'react';

class TableHead extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <thead>
            <tr>
                <th>
                    First Name
                </th>
                <th>
                    Last Name
                </th>
                <th>
                    City
                </th>
            </tr>
            </thead>
        )
    }
}

export default TableHead;