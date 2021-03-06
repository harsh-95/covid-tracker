import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import axios from 'axios';
import cx from 'classnames';

import styles from './DailyGraph.module.css';

const DailyGraph = () =>{

    const [activeClass, setActiveClass] = useState('0');
    const [fetchedData, setFetchedData] = useState([]);
    const [dailyData, setDailyData] = useState([]);
    const [stateWise, setStateWise] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const data = (await axios.get('https://api.covid19india.org/data.json'))
            console.log(data.data);
            setDailyData(data.data.cases_time_series);
            setFetchedData(data.data.cases_time_series);
            setStateWise(data.data.statewise);
        }
        fetchApi();
    },[])

    const lineChart = (
        dailyData.length ?
        (<Line
            data={{
                labels: dailyData.map(({date})=> new Date(date).toLocaleDateString("en-Us",{month: 'short', day: 'numeric'})),
                datasets: [{
                    data: dailyData.map(({totalconfirmed})=> totalconfirmed),
                    label: 'Infected Cases in India',
                    borderColor: '#3333ff',
                    fill: true,
                }]
            }}
            options={{
                scales: {
                   yAxes: [{
                      ticks: {
                         callback: function(value) {
                            var ranges = [
                               { divider: 1e3, suffix: 'k' }
                            ];
                            function formatNumber(n) {
                               for (var i = 0; i < ranges.length; i++) {
                                  if (n >= ranges[i].divider) {
                                     return (n / ranges[i].divider).toString() + ranges[i].suffix;
                                  }
                               }
                               return n;
                            }
                            return formatNumber(value);
                         }
                      }
                   }]
                }
             }}
        />)
        : null
    )


    const showSpecificTimeData = (days, index) => {
        setActiveClass(index);
        const startDate = (days !== 0) ? (new Date(new Date(new Date().setDate(new Date().getDate() - days ))).toLocaleDateString("en-US", {month: 'short', day: 'numeric'})) : null
        const datesArray = fetchedData.filter(({date})=> new Date(date) > new Date(startDate? startDate : null));
        setDailyData(datesArray);
    }

    const barChart = (
        dailyData.length ?
        (<Bar 
            data={{
                labels: dailyData.map(({date})=> new Date(date).toLocaleDateString("en-US", {month: 'short', day: 'numeric'})),
                datasets:[{
                    label: 'Daily Cases India',
                    backgroundColor: 'rgba(255,0,0,0.7)',
                    data:dailyData.map(({dailyconfirmed})=> dailyconfirmed),
                }]
            }}
        />)
        : null
    );

    return(
        <div className={styles.container}>
                {lineChart}
                {barChart}
                <div className={styles.buttonsDiv}>
                    <button className={cx(styles.btn, activeClass === '0' ? styles.active_button: '')} onClick={()=>showSpecificTimeData(0, "0")}>Beginning</button>
                    <button className={cx(styles.btn,  activeClass === '1' ? styles.active_button: '')} onClick={()=>showSpecificTimeData(8, "1")}>This Week</button>
                    <button className={cx(styles.btn,  activeClass === '2' ? styles.active_button: '')} onClick={()=>showSpecificTimeData(30, "2")}>One Month</button>
                </div>
        </div>
    )
}

export default DailyGraph;