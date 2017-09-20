import React, {Component} from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import TableList from './components/TableList.jsx'

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <section className='container'>
                    <div className="row">
                        <div className="col-xs-12">
                            <TableList />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default App;
