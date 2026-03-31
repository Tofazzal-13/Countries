import React from 'react';

const Country = ({country}) => {
    
    console.log(country);
    
    return (
        <div className='card'>
            <img src={country.flags.flags.png} alt="" />
            <h4>Name : {country.name.common}</h4>
            <p>Population: {country.population.population}</p>

        </div>
    );
};

export default Country;