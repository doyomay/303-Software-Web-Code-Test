import React, {Component} from 'react';
import Axios from 'axios';
import TableHead from './TableHead.jsx';
import TableItem from './TableItem.jsx';

class TableList extends Component {
    constructor(props) {
        super(props);
        this.url_data = 'http://www.filltext.com/?rows=100&fname={firstName}&lname={lastName}&city={city}';
        this.state = {
            data: []
        };
    }

    componentWillMount() {
        this.mountData();
    }

    mountData() {
        const dataFromServerPromise = Axios.get(this.url_data);
        dataFromServerPromise.then(response => this.setData( response.data ));
    }

    setData(data) {
        this.setState({data});
    }

    render() {
        const itemsResult = this.state.data.map((item, id) => {
            return (
                <TableItem
                    key={id}
                    fname={item.fname}
                    lname={item.lname}
                    city={item.city}
                />)
        });

        return (
            <table className="table table-hover table-bordered">
                <TableHead />
                <tbody>
                    {itemsResult}
                </tbody>
            </table>
        )
    }
}

export default TableList;