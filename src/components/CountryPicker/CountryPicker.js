import React, { useState, useEffect } from 'react';
import { FormControl, NativeSelect, StylesProvider } from '@material-ui/core';
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
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {fetchedCountries.map((country, i)=> <option value={country} key={i}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;