import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import axios from 'axios';
import { StylesProvider } from '@material-ui/core';

import styles from './DailyGraph.module.css';

const DailyGraph = () =>{

    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const data = (await axios.get('https://api.covid19india.org/data.json'))
            console.log(data.data.cases_time_series);
            setDailyData(data.data.cases_time_series);
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
                    label: 'Infected',
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

    const barChart = (
        dailyData.length ?
        (<Bar 
            data={{
                labels: dailyData.map(({date})=> new Date(date).toLocaleDateString("en-US", {month: 'short', day: 'numeric'}) > "25 March "),
                datasets:[{
                    label: 'Daily Cases',
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
        </div>
    )
}

export default DailyGraph;