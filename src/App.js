import React, { Component } from 'react';

import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import DailyGraph from './components/DailyGraph/DailyGraph';

import styles from './App.module.css';
import coronaImage from './images/covid-19-logo.png';

import { fetchData, fetchCountryData} from './api/';
import StateWiseTable from './components/StateWiseTable/StateWiseTable';

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
        this.setState({
            data: fetchedData,
            country: country
        });
    }

    async componentDidMount() {
        const data = await fetchData();
        this.setState({data});
    }

    render(){
        const {data, country} = this.state;
        return(<div className={styles.container}>
                <img className={styles.image} src={coronaImage} />
                <Cards data={data}/>
                <StateWiseTable />
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
                <DailyGraph />
            </div>)
    }
}

export default App;
