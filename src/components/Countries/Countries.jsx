import React, { use, useState } from 'react';
import Country from '../Country/Country';
import "./Countries.css"

const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountry = (country) => {
        console.log("handle visited country clicked",country);

    }
    const countriesData = use(countriesPromise)
    const countries = countriesData.countries;

    return (
        <div>
            <h1>In the countries: {countries.length} </h1>
            <h3>Totol Country Visited: </h3>
            <div className='card_display'>
                {
                    countries.map(country =>
                        <Country
                            key={country.cca3.cca3}
                            country={country}
                            handleVisitedCountry = {handleVisitedCountry}
                            >
                            
                        </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;