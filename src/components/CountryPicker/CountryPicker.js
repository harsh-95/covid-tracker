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
        fetchedCountries.length ?
        (<FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global (Select a Country)</option>
                {fetchedCountries.map((country, i)=> <option value={country} key={i}>{country}</option>)}
            </NativeSelect>
        </FormControl>)
        : null
    )
}

export default CountryPicker;