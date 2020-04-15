import React, { Component } from 'react';

import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';

import styles from './App.module.css';

import { fetchData, fetchCountries, fetchCountryData} from './api/';

class App extends Component{

    state = {
        data: {},
        country: ''
    }

    handleCountryChange = async (country) => {
        let fetchedData;
        if(!country){
            fetchedData = await fetchData();
        } else{
            fetchedData = await fetchCountryData(country);
        }
        console.log(fetchedData);
        this.setState({
            data: fetchedData,
            country: country
        });
    }

    async componentDidMount() {
        const data = await fetchData();
        console.log(data);
        console.log(this);
        this.setState({data});
    }

    render(){
        const {data, country} = this.state;
        return(<div className={styles.container}>
                <h1>App</h1>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>)
    }
}

export default App;
