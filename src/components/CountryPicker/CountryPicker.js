import React, { useState, useEffect } from 'react';
import { FormControl, Select, Input, StylesProvider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import {fetchCountries} from '../../api';

import styles from './CountryPicker.module.css';

const useInputStyles = makeStyles({
    underline: {
      "&:before": {
        // normal
        borderBottom: "none"
      },
      "&:after": {
        // focused
        borderBottom: "1px solid #e8e8e9"
      },
      "&:hover:not(.Mui-disabled):not(.Mui-focused):not(.Mui-error):before": {
        // hover
        borderBottom: "none"
      }
    }
  });

const CountryPicker = ({handleCountryChange, classes}) => {

    const [fetchedCountries, setFetchedCountries] = useState([]);
    const inputClasses = useInputStyles();

    useEffect(()=>{
        const fetchTheCountries = async () =>{
            setFetchedCountries(await fetchCountries());
        }
        fetchTheCountries();
    },[setFetchedCountries])

    return(
        fetchedCountries.length ?
        (<FormControl variant="outlined" className={styles.formControl}>
            <Select native input={<Input classes={inputClasses} />} onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global (Select a Country)</option>
                {fetchedCountries.map((country, i)=> <option value={country} key={i}>{country}</option>)}
            </Select>
        </FormControl>)
        : null
    )
}

export default CountryPicker;