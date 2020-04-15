import React, { Component } from 'react';

import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';

import styles from './App.module.css';

import { fetchData} from './api/';

class App extends Component{

    state = {
        data: {}
    }

    async componentDidMount() {
        const data = await fetchData();
        console.log(data);

        this.setState({data});
    }

    render(){
        const {data} = this.state;
        return(<div className={styles.container}>
                <h1>App</h1>
                <Cards data={data}/>
                <CountryPicker/>
                <Chart/>
            </div>)
    }
}

export default App;
