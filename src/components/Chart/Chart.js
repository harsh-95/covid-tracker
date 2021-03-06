import React, {useState, useEffect} from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar} from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = ({data: {confirmed, recovered, deaths}, country}) => {

    const [dailyData, setDailyData] = useState([]);

    useEffect(()=>{
        const fetchApi = async () => {
            setDailyData(await fetchDailyData());
        }
        fetchApi();
    },[]);

    const lineChart = (
        dailyData.length ?
        (<Line 
            data={{
                labels: dailyData.map(({date}) => new Date(date).toLocaleDateString("en-US",{month: 'short', day: 'numeric'})),
                datasets: [{
                    data: dailyData.map(({confirmed}) => confirmed),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true,
                }, {
                    data: dailyData.map(({deaths}) => deaths),
                    label: 'Deaths',
                    borderColor: '#ff0000',
                    backgroundColor: 'rgba(255,0,0,0.5)',
                    fill: true,
                }]
            }}
            options={{
                scales: {
                   yAxes: [{
                      ticks: {
                         callback: function(value) {
                            var ranges = [
                               { divider: 1e6, suffix: 'M' },
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
        confirmed ?
            (<Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: ['rgba(0,0,255)',
                                          'rgba(0,255,0,0.5)',
                                          'rgba(255,0,0,0.5)'],
                        data: [confirmed.value, recovered.value, deaths.value]
                    }]
                }}
                options={{
                    legend: {},
                    title: {}
                }}
            />
            )
            : null
    )

    return(
        <div className={styles.container}>
            {country ? barChart : lineChart}
        </div>
    )
}

export default Chart;