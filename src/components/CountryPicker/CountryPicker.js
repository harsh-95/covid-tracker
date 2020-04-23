import React, { useState, useEffect } from 'react';
import { FormControl, Select, StylesProvider } from '@material-ui/core';
import {fetchCountries} from '../../api';

import styles from './CountryPicker.module.css';

const CountryPicker = ({handleCountryChange}) => {

    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(()=>{
        const fetchTheCountries = async () =>{
            setFetchedCountries(await fetchCountries());
        }
        fetchTheCountries();
    },[setFetchedCountries])

    return(
        fetchedCountries.length ?
        (<FormControl variant="outlined" className={styles.formControl}>
            <Select native onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global (Select a Country)</option>
                {fetchedCountries.map((country, i)=> <option value={country} key={i}>{country}</option>)}
            </Select>
        </FormControl>)
        : null
    )
}

export default CountryPicker;