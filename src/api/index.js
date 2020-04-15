import axios from 'axios';

const url = 'https://covid19.mathdro.id/api/';

export const fetchData = async () => {

    try{
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(url);

        return {confirmed, recovered, deaths, lastUpdate};

    } catch(error){

    }
}

export const fetchDailyData = async () => {

    try{
        const {data} = await axios.get(url+'daily');

        return data.map( ({confirmed, deaths, reportDate}) => ({
                            confirmed: confirmed.total,
                            deaths: deaths.total,
                            date: reportDate
                    }));

    } catch(error){

    }
}

export const fetchCountries = async () => {
    try{
        const {data: {countries}} = await axios.get(url+'countries');
        return countries.map(({name}) => name);
    } catch(error){

    }
}

export const fetchCountryData = async (country) => {
    try{
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(url+'countries/'+country);
        return {confirmed, recovered, deaths, lastUpdate};
    } catch(error){

    }
}