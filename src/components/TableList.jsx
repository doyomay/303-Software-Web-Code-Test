import React, { Component } from 'react';
import Axios from 'axios';
import TableHead from './TableHead';
import TableItem from './TableItem';

class TableList extends Component {
  constructor(props) {
    super(props);
    this.urlData = 'http://www.filltext.com/?rows=100&fname={firstName}&lname={lastName}&city={city}';
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.mountData();
  }

  setData(data) {
    this.setState({ data });
  }

  mountData() {
    const dataFromServerPromise = Axios.get(this.urlData);
    dataFromServerPromise.then(response => this.setData(response.data));
  }

  render() {
    const itemsResult = this.state.data.map((item, id) => (
      <TableItem
        key={id}
        fname={item.fname}
        lname={item.lname}
        city={item.city}
      />));

    return (
      <table className="table table-hover table-bordered">
        <TableHead />
        <tbody>
          {itemsResult}
        </tbody>
      </table>
    );
  }
}

export default TableList;
