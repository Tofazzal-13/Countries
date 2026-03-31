import React, { use, useState } from 'react';
import Country from '../Country/Country';
import "./Countries.css"

const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlag, setVisitedFlag] = useState([])
    
    const handleVisitedCountry = (country) => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries)
       
    }

    const handleVisitedFlag = (flag) => {
        const newVisitedFlag = [...visitedFlag, flag]
        setVisitedFlag(newVisitedFlag)
        
    }
    const countriesData = use(countriesPromise)
    const countries = countriesData.countries;

    return (
        <div>
            <h1>In the countries: {countries.length} </h1>
            <h3>Totol Country Visited: {visitedCountries.length} </h3>
            <h3>Total Visited Flag: {visitedFlag.length}</h3>
            <div className='card flag_container'>
                {
                    visitedFlag.map((flag, index) => <img key={index} src={flag}></img>)
                }
            </div>
            <div className='card'>
                <ol>
                    {
                        visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                    }
                </ol>
            </div>
            <div className='card_display'>
                {
                    countries.map(country =>
                        <Country
                            key = {country.cca3.cca3}
                            country = {country}
                            handleVisitedCountry = {handleVisitedCountry}
                            handleVisitedFlag = {handleVisitedFlag}
                        >

                        </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;