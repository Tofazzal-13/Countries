import React from 'react';
import "./Country.css"

const Country = ({country}) => {
    
    const handleVisited = () => {
        console.log('btn click');
        
    }
    
    return (
        <div className='card'>
            <img src={country.flags.flags.png} alt="" />
            <h4>Name : {country.name.common}</h4>
            <p>Population: {country.population.population}</p>
            <p>Area:{country.area.area} {country.area.area > 300000 ? "(Big Country)" : "(Small Country)"}</p>
            <button onClick={handleVisited}>Not Visited</button>
        </div>
    );
};

export default Country;