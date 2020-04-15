import React, {useState, useEffect} from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar} from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = ({data, country}) => {

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
                labels: dailyData.map(({date}) => date),
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
            
            />)
        : null
    )

    const barChart = (
        data.confirmed ?
            (<Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: [],
                        data: []
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