import React, {Component} from 'react';
import Axios from 'axios';
import TableHead from './TableHead.jsx';
import TableItem from './TableItem.jsx';

class TableList extends Component {
    constructor(props) {
        super(props);
        this.url_data = 'http://www.filltext.com/?rows=100&fname=%7BfirstName%7D&lname=%7BlastName%7D&city=%7Bcity%7D';
        this.state = {
            data: []
        };
    }

    componentWillMount() {
        Axios.get(this.url_data).then(response => this.setState({data: response.data}));
    }

    render() {
        return (
            <table className="table table-hover table-bordered">
                <TableHead />
                <tbody>
                {this.state.data.map((item, i) => {
                    return (
                        <TableItem
                            key={i}
                            fname={item.fname}
                            lname={item.lname} city={item.city}
                        />)
                })}
                </tbody>
            </table>
        )
    }
}

export default TableList;